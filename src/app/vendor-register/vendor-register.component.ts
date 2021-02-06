import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Vendor } from "../Vendor";
import { AuthenticationService } from "../service/authentication.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../service/user.service";

@Component({
  selector: "app-vendor-register",
  templateUrl: "./vendor-register.component.html",
  styleUrls: ["./vendor-register.component.css"]
})
export class VendorRegisterComponent implements OnInit {
  name: string = this.authservice.getName();
  userForm: FormGroup;
  user: Vendor = {
    vendorName: this.name,
    regNo: "",
    address: "",
    country: "",
    state: "",
    contactNumber: 123,
    website: "",
    email: "",
    certIssueDate: "",
    certValidDate: "",
    yearEstd: "",
    service: "",
    apporved: false,
    submitted: true
  };
  constructor(
    private authservice: AuthenticationService,
    public route: ActivatedRoute,
    public userService: UserService,
    public router: Router
  ) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      vendorName: new FormControl(this.name, [Validators.required]),
      regNo: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9s]*$")
      ]),
      address: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      contactNumber: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9s]*$")
      ]),
      website: new FormControl("", [Validators.required]),
      certIssueDate: new FormControl("", [Validators.required]),
      certValidDate: new FormControl("", [Validators.required]),
      yearEstd: new FormControl("", [Validators.required]),
      service: new FormControl("", [Validators.required])
    });
    this.userForm
      .get("vendorName")
      .valueChanges.subscribe(value => (this.user.vendorName = value));
    this.userForm
      .get("regNo")
      .valueChanges.subscribe(value => (this.user.regNo = value));
    this.userForm
      .get("address")
      .valueChanges.subscribe(value => (this.user.address = value));
    this.userForm
      .get("country")
      .valueChanges.subscribe(value => (this.user.country = value));
    this.userForm
      .get("state")
      .valueChanges.subscribe(value => (this.user.state = value));
    this.userForm
      .get("email")
      .valueChanges.subscribe(value => (this.user.email = value));
    this.userForm
      .get("contactNumber")
      .valueChanges.subscribe(value => (this.user.contactNumber = value));
    this.userForm
      .get("website")
      .valueChanges.subscribe(value => (this.user.website = value));
    this.userForm
      .get("certIssueDate")
      .valueChanges.subscribe(value => (this.user.certIssueDate = value));
    this.userForm
      .get("certValidDate")
      .valueChanges.subscribe(value => (this.user.certValidDate = value));
    this.userForm
      .get("yearEstd")
      .valueChanges.subscribe(value => (this.user.yearEstd = value));
    this.userForm
      .get("service")
      .valueChanges.subscribe(value => (this.user.service = value));
  }
  /*submites the new service for vendor */
  onSubmit() {
    this.userService.addVendor(this.user).subscribe();
    console.log("jhgf");
    this.router.navigateByUrl("/vendor");
  }

  get vendorName() {
    return this.userForm.get("vendorName");
  }
  get regNo() {
    return this.userForm.get("regNo");
  }
  get address() {
    return this.userForm.get("address");
  }
  get country() {
    return this.userForm.get("country");
  }
  get state() {
    return this.userForm.get("state");
  }
  get email() {
    return this.userForm.get("email");
  }
  get contactNumber() {
    return this.userForm.get("contactNumber");
  }
  get website() {
    return this.userForm.get("website");
  }
  get certIssueDate() {
    return this.userForm.get("certIssueDate");
  }
  get certValidDate() {
    return this.userForm.get("certValidDate");
  }
  get yearEstd() {
    return this.userForm.get("yearEstd");
  }
  get service() {
    return this.userForm.get("service");
  }
}
