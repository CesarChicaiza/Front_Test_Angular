import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from 'src/app/services/customer.service';

import { Customer } from '../../interfaces/customer.interface';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  displayedColumns: string[] = ['identificationDocument','name', 'lastName', 'email', 'phone'];
  dataSource = new MatTableDataSource<Customer>();
  ngOnInit(): void {
    this.getCustomer()
  }
  /**
   *
   */
  constructor(private _customerService: CustomerService) {

  }
  getCustomer(){
    this._customerService.getCustomer().subscribe(data=>{
      console.log(data);
      this.dataSource.data=data;
    })
  }
}

