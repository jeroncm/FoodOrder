import { Component, OnInit } from "@angular/core";
import { UserService } from "../service/user.service";
import { Vendor } from "../Vendor";
import { AuthenticationService } from "../service/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  vendor: Vendor[];
  name: string = this.authservice.getName();
  constructor(
    public userService: UserService,
    public authservice: AuthenticationService,
    public router: Router
  ) {}
  Acceptedvendor: Vendor[];
  ngOnInit() {
    this.userService.getAllServiceAdmin().subscribe(Vendor => {
      this.vendor = Vendor;
    });

    this.userService.getAllApprovedAdmin().subscribe(Data => {
      this.Acceptedvendor = Data;
    });
  }
  /* accepts the request */
  accept(vendor: Vendor) {
    vendor.apporved = true;
    this.userService.modifyVendor(vendor).subscribe(() =>
      this.userService.getAllServiceAdmin().subscribe(Vendor => {
        this.vendor = Vendor;
      })
    );
    this.userService.modifyVendor(vendor).subscribe(() =>
      this.userService.getAllApprovedAdmin().subscribe(Vendor => {
        this.Acceptedvendor = Vendor;
      })
    );
  }
/* rejects the service*/
  reject(vendor: Vendor) {
    vendor.submitted = false;
    this.userService.modifyVendor(vendor).subscribe(() =>
      this.userService.getAllServiceAdmin().subscribe(Vendor => {
        this.vendor = Vendor;
      })
    );
    this.userService.modifyVendor(vendor).subscribe(() =>
      this.userService.getAllApprovedAdmin().subscribe(Vendor => {
        this.Acceptedvendor = Vendor;
      })
    );
  }
/* deletes the service*/
  delete(vendor: Vendor) {
    vendor.apporved = false;
    this.userService.modifyVendor(vendor).subscribe(() =>
      this.userService.getAllServiceAdmin().subscribe(Vendor => {
        this.vendor = Vendor;
      })
    );
    this.userService.modifyVendor(vendor).subscribe(() =>
      this.userService.getAllApprovedAdmin().subscribe(Vendor => {
        this.Acceptedvendor = Vendor;
      })
    );
  }
/* logsout*/
  logout() {
    this.authservice.logout();
    this.router.navigateByUrl("/login");
  }
}
