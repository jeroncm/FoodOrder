import { Component, OnInit } from "@angular/core";
import { Vendor } from "../Vendor";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthenticationService } from "../service/authentication.service";
import { UserService } from "../service/user.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-vendor-edit",
  templateUrl: "./vendor-edit.component.html",
  styleUrls: ["./vendor-edit.component.css"]
})
export class VendorEditComponent implements OnInit {
  name: string = this.authservice.getName();
  userForm: FormGroup;
  vendor: Vendor;
  id = this.route.snapshot.paramMap.get("id");
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
    let vendorId = Number(this.id);
    this.userService.getAllServiceEdit(vendorId).subscribe(data => {
      this.vendor = data;

      this.userForm = new FormGroup({
        vendorName: new FormControl(this.vendor.vendorName, [
          Validators.required
        ]),
        regNo: new FormControl(this.vendor.regNo, [
          Validators.required,
          Validators.pattern("^[0-9s]*$")
        ]),
        address: new FormControl(this.vendor.address, [Validators.required]),
        country: new FormControl(this.vendor.country, [Validators.required]),
        state: new FormControl(this.vendor.state, [Validators.required]),
        email: new FormControl(this.vendor.email, [Validators.required]),
        contactNumber: new FormControl(this.vendor.contactNumber, [
          Validators.required,
          Validators.pattern("^[0-9s]*$")
        ]),
        website: new FormControl(this.vendor.website, [Validators.required]),
        certIssueDate: new FormControl(this.vendor.certIssueDate, [
          Validators.required
        ]),
        certValidDate: new FormControl(this.vendor.certValidDate, [
          Validators.required
        ]),
        yearEstd: new FormControl(this.vendor.yearEstd, [Validators.required]),
        service: new FormControl(this.vendor.service, [Validators.required])
      });
      this.userForm
        .get("vendorName")
        .valueChanges.subscribe(value => (this.vendor.vendorName = value));
      this.userForm
        .get("regNo")
        .valueChanges.subscribe(value => (this.vendor.regNo = value));
      this.userForm
        .get("address")
        .valueChanges.subscribe(value => (this.vendor.address = value));
      this.userForm
        .get("country")
        .valueChanges.subscribe(value => (this.vendor.country = value));
      this.userForm
        .get("state")
        .valueChanges.subscribe(value => (this.vendor.state = value));
      this.userForm
        .get("email")
        .valueChanges.subscribe(value => (this.vendor.email = value));
      this.userForm
        .get("contactNumber")
        .valueChanges.subscribe(value => (this.vendor.contactNumber = value));
      this.userForm
        .get("website")
        .valueChanges.subscribe(value => (this.vendor.website = value));
      this.userForm
        .get("certIssueDate")
        .valueChanges.subscribe(value => (this.vendor.certIssueDate = value));
      this.userForm
        .get("certValidDate")
        .valueChanges.subscribe(value => (this.vendor.certValidDate = value));
      this.userForm
        .get("yearEstd")
        .valueChanges.subscribe(value => (this.vendor.yearEstd = value));
      this.userForm
        .get("service")
        .valueChanges.subscribe(value => (this.vendor.service = value));
    });
  }
  /* saves the editted value in the database*/
  onSubmit() {
    this.vendor.submitted = true;
    this.userService.modifyVendor(this.vendor).subscribe();
    console.log("jhgf");
    console.log(this.user);

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
