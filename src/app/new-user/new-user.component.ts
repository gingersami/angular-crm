import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from '../Models/Customer';
import {CustomerService} from '../user-service.service';
import {CompanyService} from '../company.service';
import {Company} from '../Models/Company';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  @Output() refresh = new EventEmitter();

  companies: Company[];
  firstName = '';
  lastName = '';
  companyName = '';
  phone: number;
  email = '';

  constructor(private customerSerive: CustomerService, private companyService: CompanyService) {
  }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  newUser() {
    const customer = new Customer(this.firstName, this.lastName, this.companyName, this.email, this.phone);
    this.customerSerive.sendUser(customer).subscribe(data => {
        console.log(data);
      },
      (err) => console.log(err),
      () => this.refresh.emit()
    );
  }
}
