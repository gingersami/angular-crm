import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from './Models/Customer';
import {Observable} from 'rxjs/Observable';
import {Company} from './Models/Company';
import {Comment} from './Models/Comment';



@Injectable()
export class CustomerService {
  users: Customer[];


  constructor(private http: HttpClient) { }


  getUsers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('api/customers');
  }

  sendUser(customer): Observable<Customer> {
   return this.http.post<Customer>('api/customers', customer);
  }



  getCustomer(customer): Observable<Customer> {
    console.log(customer);
    return this.http.get<Customer>(`api/customers/${customer}`);
  }

  addComment(comment: Comment): Observable<Comment> {
    console.log(comment);
    return this.http.post<Comment>(`api/customers/${comment.customerEmail}/comments`, comment);
  }
}
