import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "./service/authentication.service";

@Injectable({
  providedIn: "root"
})
export class AuthvendorGuard implements CanActivate {
  constructor(
    public route: Router,
    public authservice: AuthenticationService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authservice.guardvendor()) {
      return true;
    } else {
      this.route.navigateByUrl("/home");
      return false;
    }
  }
}
