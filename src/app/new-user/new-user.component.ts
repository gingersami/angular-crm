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
  phone = 0;
  email = '';

  constructor(private customerSerive: CustomerService) { }

  ngOnInit() {
  }

  newUser() {
    let customer = new Customer(this.firstName,this.lastName,this.companyName,this.email,this.phone)
    this.customerSerive.sendUser(customer).subscribe(data=>{
      console.log(data)
    });
  }
}
