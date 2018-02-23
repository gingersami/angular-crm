import { Component, OnInit } from '@angular/core';
import {Customer} from '../Models/Customer';
import {CustomerService} from '../user-service.service';

class User {
}

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {


  firstName = '';
  lastName = '';
  companyName = '';
  phone = '';
  email = '';

  constructor(private customerSerive: CustomerService) { }

  ngOnInit() {
  }

  newUser() {
    const customer = {firstName: this.firstName, lastName: this.lastName, customer_email: this.email, phone: this.phone, company_name: this.companyName};
    console.log(customer);
    this.customerSerive.sendUser(customer).subscribe(data=>{
      console.log(data)
    });
  }
}
