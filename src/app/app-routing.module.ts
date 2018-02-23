import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomersComponent} from './customers/customers.component';
import {CompaniesComponent} from './companies/companies.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'companies', component:CompaniesComponent}
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
