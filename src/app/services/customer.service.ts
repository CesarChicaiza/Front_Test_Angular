import { Customer } from '../interfaces/customer.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private myAppUrl: string = 'https://localhost:7151/';
  private myApiUrl: string = 'api/Customer'
  constructor(private http: HttpClient) { }

  getCustomer():Observable<any>{
    return this.http.get<Customer[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }

  addCustomer(customer: Customer): Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`,customer);
  }
}
