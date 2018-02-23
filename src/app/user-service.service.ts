import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from './Models/Customer';
import {Observable} from 'rxjs/Observable';

class customer {
}

@Injectable()
export class CustomerService {
  users: Customer[];

  constructor(private http: HttpClient) { }


  getUsers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('api/customers');
  }

  sendUser(customer):Observable<customer> {
   return this.http.post<customer>('api/cutomers',customer)
  }
}
