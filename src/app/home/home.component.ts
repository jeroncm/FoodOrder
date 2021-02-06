import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "../service/authentication.service";
import { UserService } from "../service/user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    public authservice: AuthenticationService,
    public userService: UserService,
    public router: Router
  ) {}

  ngOnInit() {}
}
