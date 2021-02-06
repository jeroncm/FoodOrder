import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../service/authentication.service";
import { UserService } from "../service/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Bill } from "../Bill";

@Component({
  selector: "app-transaction-vendor",
  templateUrl: "./transaction-vendor.component.html",
  styleUrls: ["./transaction-vendor.component.css"]
})
export class TransactionVendorComponent implements OnInit {
  vendor: Bill;
  total: any;
  pending: any;
  remain: any;

  name: string = this.authservice.getName();
  constructor(
    private authservice: AuthenticationService,
    public userService: UserService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userService
      .gettransactionVendor(this.userService.getVendorId())
      .subscribe(data => {
        this.vendor = data;
        console.log(this.vendor);
      });
    this.userService
      .gettotalVendor(this.userService.getVendorId())
      .subscribe(data => {
        this.total = data;
        console.log(this.total);
      });
    this.userService
      .gettotalPending(this.userService.getVendorId())
      .subscribe(data => {
        this.pending = data;
        console.log(this.pending);
      });
    this.userService
      .gettotalremaining(this.userService.getVendorId())
      .subscribe(data => {
        this.remain = data;
        console.log(this.remain);
      });
  }
/* logsout*/
  logout() {
    this.authservice.logout();
    this.router.navigateByUrl("/login");
  }
}
