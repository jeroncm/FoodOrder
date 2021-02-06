import { Component, OnInit } from "@angular/core";
import { User } from "../User";
import { AuthenticationService } from "../service/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  authenticated: boolean = true;
  error: boolean = true;

  constructor(
    private authservice: AuthenticationService,
    private router: Router
  ) {}
  loggeduser: User;
  ngOnInit() {
    this.loggeduser = {
      firstName: "",
      password: ""
    };
  }
  /* valodates the credentials*/
  onlogin() {
    console.log("hi");

    let authResult = this.authservice.authenticate(
      this.loggeduser.firstName,
      this.loggeduser.password
    );
    authResult.subscribe(
      data => {
        console.log("success");

        this.authservice.setToken(data.token);
        this.authservice.setName(data.user);

        this.authservice.setRole(data.role);
        this.authservice.setId(data.id);

        console.log(data.user);
        console.log(data.role);
        console.log(data.id);

        if (data.role == "admin") {
          this.router.navigateByUrl("/admin");
        } else if (data.role == "user") {
          this.router.navigateByUrl("/search-user");
        } else if (data.role == "vendor") {
          this.router.navigateByUrl("/vendor");
        }
      },
      err => {
        console.log("in error");

        this.authenticated = false;
        if (err.status == 401) {
          this.error = false;
        }
      }
    );
  }
}
