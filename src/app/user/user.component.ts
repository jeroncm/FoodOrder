import { Component, OnInit, Input } from "@angular/core";
import { AuthenticationService } from "../service/authentication.service";
import { UserService } from "../service/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Vendor } from "../Vendor";
import { Bill } from "../Bill";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  @Input()
  searchVendor: Vendor[];
  // id1 = this.route.snapshot.paramMap.get("id");
  // id:number = Number(this.id1);
  billp: Bill = {
    vendorId: 1,
    userId: this.authservice.getId(),
    billNumber: ""
  };

  @Input()
  pref: Vendor[];

  name: string = this.authservice.getName();
  Vendor: Vendor[];

  searchtext: string = "";
  bill1: any;
  okay: boolean = false;
  constructor(
    private authservice: AuthenticationService,
    public userService: UserService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userService.getAllApprovedAdmin().subscribe(searchVendor => {
      this.searchVendor = searchVendor;
    });
    this.userService.getPrefService(this.name).subscribe(data => {
      this.pref = data;
    });
    this.userService.getNotify().subscribe(data => {
      this.bill1 = data;
      console.log(this.bill1);
    });
    console.log(this.authservice.getRole());
  }
/*sets the vendor details and adds to the database */
  bill(id: number, bil: string) {
    console.log("inside bil");
    console.log(this.billp.billNumber);
    console.log(this.billp);
    this.billp.vendorId = id;
    console.log(id);
    this.userService.setBill(bil);
    this.userService.setVendorId(id);

    this.userService.addBill(this.billp).subscribe();
    this.okay = true;
  }
/* redirests to the payment page*/
  redirect() {
    this.router.navigateByUrl("/pay");
  }
/*logs out */
  logout() {
    this.authservice.logout();
    this.router.navigateByUrl("/login");
  }
/*adds the service to preferred service */
  pay(id: number) {
    console.log(id);
    console.log("jffgcfcgh");

    this.router.navigateByUrl("/pay");
    this.userService.getPrefService(this.name).subscribe(data => {
      this.pref = data;
    });
    console.log(this.pref);
    this.userService.setVendorId(id);
  }
/* display the details*/
  view(id: number) {
    return this.userService.getAllServiceEdit(id).subscribe(data => {
      this.Vendor = data;
    });
  }
}
