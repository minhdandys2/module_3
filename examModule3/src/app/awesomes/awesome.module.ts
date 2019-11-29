import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AwesomeListComponent} from './awesome-list/awesome-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AwesomeCreateComponent } from './awesome-create/awesome-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AwesomeEditComponent } from './awesome-edit/awesome-edit.component';

const route: Routes = [
  {path: '', component: AwesomeListComponent},
  {path: 'create', component: AwesomeCreateComponent},
  {path: ':id/edit', component: AwesomeEditComponent}
];



@NgModule({
  declarations: [AwesomeListComponent, AwesomeCreateComponent, AwesomeEditComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AwesomeModule { }
