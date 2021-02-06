import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../service/authentication.service";
import { UserService } from "../service/user.service";
import { User } from "../User";
import { Vendor } from "../Vendor";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-vendor",
  templateUrl: "./vendor.component.html",
  styleUrls: ["./vendor.component.css"]
})
export class VendorComponent implements OnInit {
  name: string = this.authservice.getName();
  userForm: FormGroup;
  Vendor: Vendor[];
  RejVendor: Vendor[];
  AprVendor: Vendor[];
  WaitVendor: Vendor[];

  ordVendor: Vendor = {};
  data: boolean = false;
  data1: boolean = true;

  constructor(
    private authservice: AuthenticationService,
    public route: ActivatedRoute,
    public userService: UserService,
    public router: Router
  ) {}

  ngOnInit() {
    this.userService.getAllRejectedService(this.name).subscribe(Vendor => {
      this.RejVendor = Vendor;
    });
    this.userService.getAllWaitingService(this.name).subscribe(Vendor => {
      this.WaitVendor = Vendor;
    });
    this.userService.getAllApprovedService(this.name).subscribe(Vendor => {
      this.AprVendor = Vendor;
    });
    this.userService.getAllApprovedUser(this.name).subscribe(Vendor => {
      this.ordVendor = Vendor;
    });
    console.log(this.name);
    console.log(this.ordVendor.vendorId);

    this.userService.setVendorId(this.ordVendor.vendorId);
    this.userService.setVendorName(this.ordVendor.vendorName);

    console.log(this.ordVendor.vendorName);
  }
/*deletes the rejected vendor */
  deleteVendor(vendor: Vendor) {
    vendor.apporved = true;
    vendor.submitted = false;
    this.userService.modifyVendor(vendor).subscribe(() =>
      this.userService.getAllRejectedService(this.name).subscribe(Vendor => {
        this.RejVendor = Vendor;
      })
    );
    this.userService.modifyVendor(vendor).subscribe(() =>
      this.userService.getAllApprovedService(this.name).subscribe(Vendor => {
        this.AprVendor = Vendor;
      })
    );
  }
/* routes to registraton page*/
  regi() {
    this.router.navigateByUrl("/vendor-register");
  }
/* logsout*/
  logout() {
    this.authservice.logout();
    this.router.navigateByUrl("/login");
  }
/*sets the vendor details and routes to transactionl page */
  transaction(id: number, name: string, service: string) {
    this.userService.setVendorId(id);
    this.userService.setVendorName(name);
    this.userService.setVendorService(service);
    console.log(id);

    this.router.navigateByUrl("/vendor-transaction");
  }
}
