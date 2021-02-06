import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "../service/authentication.service";
import { UserService } from "../service/user.service";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"]
})
export class NotificationComponent implements OnInit {
  venname: any;
  venservice: any;
  duedate: any;
  name: string = this.authservice.getName();

  constructor(
    public route: ActivatedRoute,
    public authservice: AuthenticationService,
    public userService: UserService,
    public router: Router
  ) {}

  ngOnInit() {
    
 
    this.userService.getusernotificationofvendorname().subscribe(data => {
      this.venname = data;
      console.log(this.venname);
    });
    this.userService.getusernotificationofvendorservice().subscribe(data => {
      this.venservice = data;
      console.log(this.venservice);
    });
    this.userService.getduedatefromvendor().subscribe(data => {
      this.duedate = data;
      console.log(this.duedate);
    });
  }
/* logsout*/
  logout() {
    this.authservice.logout();
    this.router.navigateByUrl("/login");
  }
}
