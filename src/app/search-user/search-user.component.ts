import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../service/authentication.service";
import { UserService } from "../service/user.service";
import { Router } from "@angular/router";
import { Vendor } from "../Vendor";

@Component({
  selector: "app-search-user",
  templateUrl: "./search-user.component.html",
  styleUrls: ["./search-user.component.css"]
})
export class SearchUserComponent implements OnInit {
  searchVendor: any;
  pref: any;
  searchtext: string = "";
  name: string = this.authservice.getName();
  constructor(
    private authservice: AuthenticationService,
    public userService: UserService,
    public router: Router
  ) {}

  ngOnInit() {}
/* searches the details based on name and  service*/
  search() {
    this.userService.getAllApprovedAdmin().subscribe(data => {
      this.searchVendor = data;

      this.searchVendor = this.searchVendor.filter(
        x =>
          x.vendorName.toLowerCase().indexOf(this.searchtext.toLowerCase()) !==
          -1
      );

      if (this.searchVendor == "") {
        this.searchVendor = data.filter(
          x =>
            x.service.toLowerCase().indexOf(this.searchtext.toLowerCase()) !==
            -1
        );
        console.log("sdf");
      }
    });

    this.userService.getPrefService(this.name).subscribe(data1 => {
      this.pref = data1;

      this.pref = this.pref.filter(
        x =>
          x.vendorName.toLowerCase().indexOf(this.searchtext.toLowerCase()) !==
          -1
      );

      if (this.pref == "") {
        this.pref = data1.filter(
          x =>
            x.service.toLowerCase().indexOf(this.searchtext.toLowerCase()) !==
            -1
        );
      }
    });
    console.log(this.pref);
  }
}
