import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private authenticationApiUrl = "http://localhost:8022/authentication-service";
  token: string;
  user: string;
  id: number;
  name: string = "anon";
  constructor(private httpClient: HttpClient) {}

  /* authenticates the user or vendor or admin */
  authenticate(user: string, password: string): Observable<any> {
    let credentials = btoa(user + ":" + password);
  ;
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", "Basic " + credentials);
    return this.httpClient.get(this.authenticationApiUrl + "/authenticate", {
      headers
    });
  }
  public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }

  public setId(id: number) {
    this.id = id;
  }
  public getId() {
    return this.id;
  }

  public setName(user: string) {
    this.user = user;
  }
  public getName() {
    console.log(this.user);
    return this.user;
  }
  public setRole(user: string) {
    this.name = user;
  }

  public getRole() {
    return this.name;
  }
  logout() {
    console.log("inside lgout");
    this.name = "";
    this.user = "";
    this.token = "";
  }

  guard() {
    if (this.getRole() == "user") {
      return true;
    } else {
      return false;
    }
  }

  guardadmin() {
    if (this.getRole() == "admin") {
      return true;
    } else {
      return false;
    }
  }

  guardvendor() {
    if (this.getRole() == "vendor") {
      return true;
    } else {
      return false;
    }
  }
}
