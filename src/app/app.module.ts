import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { VendorRegisterComponent } from './vendor-register/vendor-register.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { HomeComponent } from './home/home.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentComponent } from './payment/payment.component';
import { GatewayComponent } from './gateway/gateway.component';
import { VendorPaymentComponent } from './vendor-payment/vendor-payment.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionVendorComponent } from './transaction-vendor/transaction-vendor.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    UserComponent,
    VendorComponent,
    VendorEditComponent,
    VendorRegisterComponent,
    SearchUserComponent,
    HomeComponent,
    PaymentComponent,
    GatewayComponent,
    VendorPaymentComponent,
    TransactionComponent,
    TransactionVendorComponent,
    NotificationComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
