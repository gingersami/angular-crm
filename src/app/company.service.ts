import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Company} from './Models/Company';

@Injectable()
export class CompanyService {


  companies: Company[];

  constructor(private http: HttpClient) { }


  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('api/companies');
  }

  sendCompany(company): Observable<Company> {
    return this.http.post<Company>('api/companies', company);
  }

}
