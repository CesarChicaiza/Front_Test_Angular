import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { ListCustomerComponent } from './components/list-customer/list-customer.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';

const routes: Routes = [
  {path:'',redirectTo:'createCustomer', pathMatch:'full'},
  {path:'listCustomer',component:ListCustomerComponent},
  {path:'createCustomer',component:CreateCustomerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
