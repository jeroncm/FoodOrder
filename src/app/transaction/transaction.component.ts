import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../service/authentication.service";
import { UserService } from "../service/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Bill } from "../Bill";

@Component({
  selector: "app-transaction",
  templateUrl: "./transaction.component.html",
  styleUrls: ["./transaction.component.css"]
})
export class TransactionComponent implements OnInit {
  bill: Bill;
  total: any;
  name: string = this.authservice.getName();
  constructor(
    private authservice: AuthenticationService,
    public userService: UserService,
    public router: Router,
    public route: ActivatedRoute
  ) {}
  id: number = this.authservice.getId();
  ngOnInit() {
    this.userService.gettransactionUser(this.id).subscribe(data => {
      this.bill = data;
      console.log(this.bill);
    });

    this.userService.gettotalUser(this.id).subscribe(data => {
      this.total = data;
      console.log(this.total);
    });
  }
  /* logsout*/
  logout() {
    this.authservice.logout();
    this.router.navigateByUrl("/login");
  }
}
