import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import {CustomerService} from './user-service.service';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CompaniesComponent } from './companies/companies.component';
import {CompanyService} from './company.service';
import { NewUserComponent } from './new-user/new-user.component';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { NewCompanyComponent } from './new-company/new-company.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CustomersComponent,
    CompaniesComponent,
    NewUserComponent,
    NewCompanyComponent,
    CustomerViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [CustomerService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
