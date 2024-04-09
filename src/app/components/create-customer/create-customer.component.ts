import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/interfaces/customer.interface';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {



  form: FormGroup;

  constructor(private fb: FormBuilder,
    private _customerService: CustomerService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
    })
  }
  addCustomer() {
    const customer: Customer={
      identificationDocument : this.form.value.identificacion,
      name : this.form.value.nombre,
      lastname: this.form.value.apellido,
      email: this.form.value.email,
      phone:this.form.value.telefono
    }
    this._customerService.addCustomer(customer).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/listCustomer']);
    })

  }



}
