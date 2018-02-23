import {Company} from './Company';
import {Comment} from './Comment';

export class Customer {
  constructor(firstName:string,lastName:string,company_name:string,customer_email:string,phone:number){
    this.firstName=firstName
    this.lastName=lastName
    this.company_name=company_name
    this.customer_email=customer_email
    this.phone=phone
  }
  firstName: string;
  lastName: string;
  company_name: string;
  customer_email: string;
  phone: number;
}
