import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from "../User";
import { UserService } from "../service/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  userForm: FormGroup;
  user: User = {
    firstName: "",
    lastName: "",
    contactNumber: 1223,
    password: "",
    role: "User",
    aadhar: 123,
    age: 12,
    gender: "male",
    panNumber: 12
  };

  constructor(public service: UserService, public router: Router) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Zs]*$")
      ]),
      contactNumber: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9s]*$")
      ]),
      password: new FormControl("", [Validators.required]),
      role: new FormControl("", []),
      panNumber: new FormControl("", [Validators.required]),
      aadhar: new FormControl("", [Validators.required]),
      age: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9s]*$")
      ]),
      gender: new FormControl("", [])
    });
    this.userForm
      .get("firstName")
      .valueChanges.subscribe(value => (this.user.firstName = value));
    this.userForm
      .get("lastName")
      .valueChanges.subscribe(value => (this.user.lastName = value));
    this.userForm
      .get("contactNumber")
      .valueChanges.subscribe(value => (this.user.contactNumber = value));
    this.userForm
      .get("password")
      .valueChanges.subscribe(value => (this.user.password = value));
    this.userForm
      .get("role")
      .valueChanges.subscribe(value => (this.user.role = value));
    this.userForm
      .get("panNumber")
      .valueChanges.subscribe(value => (this.user.panNumber = value));
    this.userForm
      .get("aadhar")
      .valueChanges.subscribe(value => (this.user.aadhar = value));
    this.userForm
      .get("age")
      .valueChanges.subscribe(value => (this.user.age = value));
    this.userForm
      .get("gender")
      .valueChanges.subscribe(value => (this.user.gender = value));
  }
  /* submits and validates and saves in db*/
  onSubmit() {
    this.service.addUserCustomer(this.user).subscribe();
    console.log("jhgf");

    this.router.navigateByUrl("login");
  }

  get firstName() {
    return this.userForm.get("firstName");
  }
  get lastName() {
    return this.userForm.get("lastName");
  }
  get contactNumber() {
    return this.userForm.get("contactNumber");
  }
  get password() {
    return this.userForm.get("password");
  }
  get role() {
    return this.userForm.get("role");
  }
  get panNumber() {
    return this.userForm.get("panNumber");
  }
  get aadhar() {
    return this.userForm.get("aadhar");
  }
  get age() {
    return this.userForm.get("age");
  }
  get gender() {
    return this.userForm.get("gender");
  }
}
