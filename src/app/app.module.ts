import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateUserAccountComponent } from './create-user-account/create-user-account.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { FinanceManagerPortalComponent } from './finance-manager-portal/finance-manager-portal.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ManageTransfersComponent } from './manage-transfers/manage-transfers.component';
import { ManageOpenAccountsComponent } from './manage-open-accounts/manage-open-accounts.component';
import { ApplyForNewAccountComponent } from './apply-for-new-account/apply-for-new-account.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    CreateUserAccountComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    UserHomeComponent,
    FinanceManagerPortalComponent,
    ManageTransfersComponent,
    ManageOpenAccountsComponent,
    ApplyForNewAccountComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
