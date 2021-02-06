import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "../service/authentication.service";
import { UserService } from "../service/user.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Bill } from "../Bill";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"]
})
export class PaymentComponent implements OnInit {
  userForm: FormGroup;
  id1 = this.route.snapshot.paramMap.get("id");
  id: number = Number(this.id1);
  bill1: Bill;
  num: number;
  no: number;
  billp: Bill = {
    vendorId: this.id,
    userId: this.authservice.getId(),
    billNumber: ""
  };
  name: string = this.authservice.getName();
  constructor(
    public route: ActivatedRoute,
    public authservice: AuthenticationService,
    public userService: UserService,
    public router: Router
  ) {}

  ngOnInit() {
    this.userService.getBillUser(this.authservice.getId()).subscribe(data => {
      this.bill1 = data;
      console.log(this.bill1);
      console.log(this.bill1.pendingAmt);
    });
    this.userService.setBill(this.bill1.billNumber);
    this.userService.setVendorId(this.bill1.vendorId);
    console.log(this.bill1);
    console.log(this.userService.getbill());

    console.log(this.bill1.pendingAmt);
  }
  /*sets the vendor details and routes to gateway */
  bill(id: number, bill: string) {
    console.log(bill);
    this.userService.setBill(bill);
    this.userService.setVendorId(id);
    this.router.navigateByUrl("/gateway");
  }
  /* adds the service to preferred service*/
  pay() {
    console.log("hifssahfdhgsf");

    this.num = Number(this.id1);
    console.log(this.num);
    console.log(this.name);
    this.userService.addPreferredService(this.name, this.num).subscribe();
  }
  /* logsout*/
  logout() {
    this.authservice.logout();
    this.router.navigateByUrl("/login");
  }
}
