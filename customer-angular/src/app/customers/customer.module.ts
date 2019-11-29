import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerAddComponent} from './customer-add/customer-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

const routes: Routes = [
  {path: '', component: CustomerListComponent},
  {path: 'add', component: CustomerAddComponent},
  {path: 'edit/:id', component: CustomerEditComponent},
];
@NgModule({
  declarations: [CustomerListComponent, CustomerAddComponent, CustomerEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class CustomerModule {
}
