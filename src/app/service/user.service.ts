import { Injectable } from "@angular/core";
import { User } from "../User";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";
import { Observable } from "rxjs";
import { Vendor } from "../Vendor";
import { Bill } from "../Bill";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(
    public httpClient: HttpClient,
    public service: AuthenticationService
  ) {}
  baseUrl: string = "http://localhost:8022/vendor-service";

  /* saves the details of the user/vendor */
  addUserCustomer(useradd: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    console.log("inside addusr");
    return this.httpClient.post<void>(
      "http://localhost:8022/authentication-service" + "/users",
      useradd,
      httpOptions
    );
  }

  /* updates if the vendor is approved or not   */
  modifyVendor(vendor: Vendor) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    console.log(vendor);

    return this.httpClient.put<void>(
      this.baseUrl + "/vendor",
      vendor,
      httpOptions
    );
  }

  /* adds a new service for a particular vendor*/
  addVendor(vendor: Vendor) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    console.log("inside addusr");
    return this.httpClient.post<void>(
      "http://localhost:8022/vendor-service" + "/vendor",
      vendor,
      httpOptions
    );
  }

  /* once the bill is paid the service is added to preferred service */
  addPreferredService(name: string, id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.post<void>(
      "http://localhost:8022/vendor-service" + "/users" + "/" + name + "/" + id,
      httpOptions
    );
  }

  // public getAllService(name: String): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + this.service.getToken()
  //     })
  //   };
  //   return this.httpClient.get(`${this.baseUrl}/vendor/${name}`, httpOptions);
  // }

  /* gets all the rejected service from the admin */
  public getAllRejectedService(name: String): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(
      `${this.baseUrl}/vendor/rejected/${name}`,
      httpOptions
    );
  }

  /* gets all the appouved services approved by the admin*/
  public getAllApprovedService(name: String): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(
      `${this.baseUrl}/vendor/approved/${name}`,
      httpOptions
    );
  }

  /* gets all the waiting services provided the vendor */
  public getAllWaitingService(name: String): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(
      `${this.baseUrl}/vendor/waiting/${name}`,
      httpOptions
    );
  }

  /* Gets all services that the vendor has registered and waiting for approval from admin  */
  public getAllServiceAdmin(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(`${this.baseUrl}/vendor/pending`, httpOptions);
  }

  /* Gets all services approved by the admin */
  public getAllApprovedAdmin(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(`${this.baseUrl}/vendor/approved`, httpOptions);
  }

  /* gets all the approved services*/
  public getAllApprovedUser(name: String): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(
      `${this.baseUrl}/vendor/approved/${name}`,
      httpOptions
    );
  }

  /* gets all the services that the user paid*/
  public getPrefService(name: String): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(
      `${this.baseUrl}/users/preferred/${name}`,
      httpOptions
    );
  }

  /* views the details of the service */
  public getAllServiceEdit(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(
      `${this.baseUrl}/vendor/edit/${id}`,
      httpOptions
    );
  }

  /* adds a bill to a particular service */
  addBill(bill: Bill) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    console.log("inside addusr");
    return this.httpClient.post<void>(
      "http://localhost:8022/vendor-service" + "/users",
      bill,
      httpOptions
    );
  }

  /* sets remainder to a particular user */
  addRemainder(remainder: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    console.log("inside addusr");
    return this.httpClient.post<void>(
      "http://localhost:8022/vendor-service" +
        "/users/" +
        this.service.getName() +
        "/" +
        this.getVendorName() +
        "/" +
        this.getVendorService() +
        "/" +
        remainder,
      httpOptions
    );
  }

  /*  gets the bill details of the user*/
  public getBillUser(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(this.baseUrl + "/users/" + id, httpOptions);
  }

  /* gets notification based on the username */
  public getNotify(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(
      this.baseUrl + "/users/notify/" + this.service.getName(),
      httpOptions
    );
  }

  /* gets the list of users who requested bills for a particular service*/
  public getBillVendor(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(this.baseUrl + "/users/bill/" + id, httpOptions);
  }

  /* updates the amount paid by the user in the database */
  amountVendor(bill: Bill) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    console.log(bill);

    return this.httpClient.put<void>(
      this.baseUrl + "/users",
      bill,
      httpOptions
    );
  }

  /* sets the amount for a particular user*/
  amountUser(bill: Bill) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    console.log(bill);

    return this.httpClient.put<void>(
      this.baseUrl + "/users/userbill",
      bill,
      httpOptions
    );
  }

  /* gets the bills for the vendor to set*/
  public getdatafromBill(bill: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(
      this.baseUrl + "/users/billdata/" + bill,
      httpOptions
    );
  }

  /* gets all the transaction made*/
  public gettransactionUser(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(
      this.baseUrl + "/users/history/" + id,
      httpOptions
    );
  }

  /* gets all the transaction of a particular vendor*/
  public gettransactionVendor(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(
      this.baseUrl + "/users/historyven/" + id,
      httpOptions
    );
  }

  /* gets the total value of the transaction */
  public gettotalUser(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(this.baseUrl + "/users/sum/" + id, httpOptions);
  }

  /* gets the total amount of all the services used by the user */
  public gettotalVendor(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(
      this.baseUrl + "/users/vendorsum/" + id,
      httpOptions
    );
  }

  /* gets the pending amount to be paid by the user */
  public gettotalPending(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(
      this.baseUrl + "/users/pending/" + id,
      httpOptions
    );
  }

  /* gets the remaining amount that has to be paid by the user */
  public gettotalremaining(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(
      this.baseUrl + "/users/remain/" + id,
      httpOptions
    );
  }

  // -------------------------------------------------

  /* gets notification of vendor service */
  public getusernotificationofvendorservice(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(
      this.baseUrl +
        "/users/getusernotificationofvendorservice/" +
        this.service.getName(),
      httpOptions
    );
  }

  /* gets the vendorname for notification */
  public getusernotificationofvendorname(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(
      this.baseUrl +
        "/users/getusernotificationofvendorname/" +
        this.service.getName(),
      httpOptions
    );
  }

  /* gets the date at which the remainder is set */
  public getduedatefromvendor(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.httpClient.get(
      this.baseUrl + "/users/getduedatefromvendor/" + this.service.getName(),
      httpOptions
    );
  }

  //---------------------------------------------

  billnumber: string;

  public setBill(billnumber: string) {
    this.billnumber = billnumber;
    console.log(billnumber);
  }

  public getbill() {
    return this.billnumber;
  }

  VendorId: number;

  public setVendorId(VendorId: number) {
    this.VendorId = VendorId;
  }

  public getVendorId() {
    return this.VendorId;
  }

  VendorName: string;

  public setVendorName(VendorName: string) {
    this.VendorName = VendorName;
  }

  public getVendorName() {
    return this.VendorName;
  }

  VendorService: string;

  public setVendorService(VendorService: string) {
    this.VendorService = VendorService;
  }

  public getVendorService() {
    return this.VendorService;
  }
}
