import { Component, OnInit } from "@angular/core";
import { Bill } from "../Bill";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "../service/authentication.service";
import { UserService } from "../service/user.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-gateway",
  templateUrl: "./gateway.component.html",
  styleUrls: ["./gateway.component.css"]
})
export class GatewayComponent implements OnInit {
  userForm: FormGroup;
  userForm1: FormGroup;
  remainder: any;
  visa: boolean = false;
  master: boolean = false;
  exp: boolean = false;
  name: string = this.authservice.getName();


  paypal: boolean = false;
  billp: Bill = {
    vendorId: this.userService.getVendorId(),
    userId: this.authservice.getId(),
    billNumber: this.userService.getbill(),
    paidAmount: 0
  };
  pay: boolean = false;

  card1: any;
  namecc: any;
  nameccccc: any;
  namecccc: any;
  nameccc: any;
  namecccccc: any;
  constructor(
    public route: ActivatedRoute,
    public authservice: AuthenticationService,
    public userService: UserService,
    public router: Router
  ) {}

  ngOnInit() {
    console.log(this.userService.getbill());

    this.userForm = new FormGroup({
      remainder: new FormControl("", [Validators.required])
    });

    this.userForm1 = new FormGroup({
      card: new FormControl("", [Validators.required]),
      namec: new FormControl("", [Validators.required]),
      cvv: new FormControl("", [Validators.required]),
      month: new FormControl("", [Validators.required]),
      year: new FormControl("", [Validators.required]),
      paidAmount: new FormControl("", [Validators.required])
    });

    this.userForm
      .get("remainder")
      .valueChanges.subscribe(value => (this.remainder = value));
    this.userForm1
      .get("card")
      .valueChanges.subscribe(value => (this.card1 = value));
    this.userForm1
      .get("namec")
      .valueChanges.subscribe(value => (this.namecc = value));
    this.userForm1
      .get("cvv")
      .valueChanges.subscribe(value => (this.nameccc = value));
    this.userForm1
      .get("month")
      .valueChanges.subscribe(value => (this.namecccc = value));
    this.userForm1
      .get("year")
      .valueChanges.subscribe(value => (this.nameccccc = value));
    this.userForm1
      .get("paidAmount")
      .valueChanges.subscribe(value => (this.namecccccc = value));
  }
/*adds remainder */
  remain() {
    console.log(this.remainder);
    this.userService.addRemainder(this.remainder).subscribe();
  }
  /*selects the type of payment */
  paid(id: number) {
    if (id == 1) {
      this.visa = true;
      this.master = false;
      this.exp = false;
      this.paypal = false;
    } else if (id == 2) {
      this.visa = false;
      this.master = true;
      this.exp = false;
      this.paypal = false;
    } else if (id == 3) {
      this.exp = true;
      this.paypal = false;
      this.visa = false;
      this.master = false;
    } else if (id == 4) {
      this.paypal = true;
      this.visa = false;
      this.master = false;
      this.exp = false;
    }
  }
/* pays the bill*/
  bill() {
    console.log(this.userService.getbill());
    console.log("inside billpay");

    this.pay = true;
    console.log(this.billp.paidAmount);
    this.userService.amountVendor(this.billp).subscribe();
    this.userService
      .addPreferredService(this.name, this.userService.getVendorId())
      .subscribe();
  }
/*logsout */
  logout() {
    this.authservice.logout();
    this.router.navigateByUrl("/login");
  }
  get card() {
    return this.userForm1.get("card");
  }
  get namec() {
    return this.userForm1.get("namec");
  }
  get cvv() {
    return this.userForm1.get("cvv");
  }
  get month() {
    return this.userForm1.get("month");
  }
  get year() {
    return this.userForm1.get("year");
  }
  get paidAmount() {
    return this.userForm1.get("paidAmount");
  }
}
