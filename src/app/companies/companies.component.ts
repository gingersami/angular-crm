import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Company} from '../Models/Company';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {


  companies: Company[];
  displayedColumns = ['name', 'address', 'country', 'customers'];
  private dataSource: MatTableDataSource<Company>;


  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(data => {
        this.companies = data;
      },
      error2 => console.log(error2),
      () =>  this.dataSource = new MatTableDataSource(this.companies)

    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

 }
