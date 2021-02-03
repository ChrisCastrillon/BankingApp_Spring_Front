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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
