import {Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter} from '@angular/core';
import {Customer} from '../Models/Customer';
import {CustomerService} from '../user-service.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];
  displayedColumns = ['firstName', 'lastName', 'company', 'email', 'info'];
  private dataSource: MatTableDataSource<Customer>;


  constructor(private customerservice: CustomerService) { }

  ngOnInit() {
    this.customerservice.getUsers().subscribe(data => {
      this.customers = data;
    },
      error2 => console.log(error2),
      () =>  this.dataSource = new MatTableDataSource(this.customers)

  );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  refreshData() {
    this.customerservice.getUsers().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource<Customer>(data);
    });
  }
}
