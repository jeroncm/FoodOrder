import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {UserComponent} from './user/user.component';
import { VendorComponent} from './vendor/vendor.component';
import {AdminComponent} from './admin/admin.component';
import {VendorEditComponent} from './vendor-edit/vendor-edit.component'
import {VendorRegisterComponent} from './vendor-register/vendor-register.component'
import {SearchUserComponent} from './search-user/search-user.component'
import {HomeComponent} from './home/home.component'
import {PaymentComponent} from './payment/payment.component'
import {GatewayComponent} from './gateway/gateway.component'
import {VendorPaymentComponent} from './vendor-payment/vendor-payment.component'
import {TransactionComponent} from './transaction/transaction.component'
import {TransactionVendorComponent} from './transaction-vendor/transaction-vendor.component'
import {NotificationComponent} from './notification/notification.component'
import { AuthadminGuard } from './authadmin.guard';
import { AuthvendorGuard } from './authvendor.guard';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'user',component:UserComponent,canActivate:[AuthGuard]},
  {path:'vendor',component:VendorComponent,canActivate:[AuthvendorGuard]},
  {path:'admin',component:AdminComponent,canActivate:[AuthadminGuard]},
  {path:'vendor-edit',component:VendorEditComponent,canActivate:[AuthvendorGuard]},
  {path:'vendor-edit/:id',component:VendorEditComponent,canActivate:[AuthvendorGuard]},
  {path:'vendor-register',component:VendorRegisterComponent,canActivate:[AuthvendorGuard]},
  {path:'search-user',component:SearchUserComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent},
  {path:'pay',component:PaymentComponent,canActivate:[AuthGuard]},
  {path:'gateway/:string',component:GatewayComponent,canActivate:[AuthGuard]},
  {path:'gateway',component:GatewayComponent,canActivate:[AuthGuard]},
  {path:'ven-pay',component:VendorPaymentComponent,canActivate:[AuthvendorGuard]},
  {path:'transaction',component:TransactionComponent,canActivate:[AuthGuard]},
  {path:'notification',component:NotificationComponent,canActivate:[AuthGuard]},
 
  {path:'vendor-transaction',component:TransactionVendorComponent,canActivate:[AuthvendorGuard]},
  {path:'ven-pay/:id',component:VendorPaymentComponent,canActivate:[AuthvendorGuard]},
  {path:'pay/:id',component:PaymentComponent,canActivate:[AuthGuard]},
 
  {path:'', redirectTo:'home',pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
