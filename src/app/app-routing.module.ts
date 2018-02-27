import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomersComponent} from './customers/customers.component';
import {CompaniesComponent} from './companies/companies.component';
import {CustomerViewComponent} from './customer-view/customer-view.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'customers/customer/:email', component: CustomerViewComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
