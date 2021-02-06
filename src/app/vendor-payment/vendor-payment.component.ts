import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../service/authentication.service";
import { UserService } from "../service/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Bill } from "../Bill";

@Component({
  selector: "app-vendor-payment",
  templateUrl: "./vendor-payment.component.html",
  styleUrls: ["./vendor-payment.component.css"]
})
export class VendorPaymentComponent implements OnInit {
  name: string = this.authservice.getName();
  id1 = this.route.snapshot.paramMap.get("id");
  Billl: Bill[];
  disp: Bill = {
    userId: 0,
    vendorId: 0,
    billNumber: "",
    amountPay: 0,
    pendingAmt: 0,
    paidAmount: 0
  };
  disp1: Bill = {
    userId: 0,
    vendorId: 0,
    billNumber: "",
    amountPay: 0,
    pendingAmt: 0,
    paidAmount: 0
  };
  just: boolean = false;
  constructor(
    private authservice: AuthenticationService,
    public userService: UserService,
    public router: Router,
    public route: ActivatedRoute
  ) {}
  id: number = Number(this.id1);
  ngOnInit() {
    console.log(this.id);
    console.log(this.userService.getbill());

    this.userService.getBillVendor(this.id).subscribe(data => {
      this.disp = data;
      console.log(this.disp);
    });
  }
/* displays the bill info*/
  bill(amt: number) {
    console.log(this.disp1[0].amountPay);
    this.disp1[0].amountPay = amt;
    console.log("sdf" + this.disp1[0]);
    this.userService.amountUser(this.disp1[0]).subscribe();
    this.just = true;
  }
/*displays for modals */
  dispp(bill: string, id: number) {
    console.log(id);

    this.userService.setBill(bill);
    console.log(bill);
    this.userService.getdatafromBill(bill).subscribe(data => {
      this.disp1 = data;
      console.log(this.disp1[0].amountPay);
    });
  }
/*logsout */
  logout() {
    this.authservice.logout();
    this.router.navigateByUrl("/login");
  }
}
