import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ApplyForNewAccountComponent } from './apply-for-new-account/apply-for-new-account.component';
import { CreateUserAccountComponent } from './create-user-account/create-user-account.component';
import { FinanceManagerPortalComponent } from './finance-manager-portal/finance-manager-portal.component';
import { LoginComponent } from './login/login.component';
import { ManageApplicationsComponent } from './manage-applications/manage-applications.component';
import { ManageTransfersComponent } from './manage-transfers/manage-transfers.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'about',component: AboutComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'create-user-account', component: CreateUserAccountComponent},
  {path: 'user-home', component: UserHomeComponent},
  {path: 'apply-for-new-account', component: ApplyForNewAccountComponent},
  {path: 'make-a-transfer', component: ManageTransfersComponent},
  {path: 'finance-manager-portal', component: FinanceManagerPortalComponent},
  {path: 'manage-applications', component: ManageApplicationsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
