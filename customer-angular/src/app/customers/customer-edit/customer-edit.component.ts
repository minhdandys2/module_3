import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ngWalkerFactoryUtils} from 'codelyzer/angular/ngWalkerFactoryUtils';
import {ICustomer} from '../ICustomer';
import {HttpResult} from '../../core/http-result';
import {MessageService} from '../../service/message.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  editCustomerForm = this.fb.group({
    name: [''],
    email: [''],
    address: ['']
  });
  index = +this.activeRoute.snapshot.paramMap.get('id');


  constructor(private fb: FormBuilder,
              private customerService: CustomerService,
              private activeRoute: ActivatedRoute,
              private route: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.customerService.findById(this.index).subscribe((result: ICustomer) => {
      this.editCustomerForm = this.fb.group({
        name: [result.name, [Validators.required, Validators.minLength(2)]],
        email: [result.email, [Validators.required]],
        address: [result.address, [Validators.required]],
      });
    });
  }

  get name() {
    return this.editCustomerForm.get('name');
  }

  get email() {
    return this.editCustomerForm.get('email');
  }

  get address() {
    return this.editCustomerForm.get('address');
  }

  submit() {
    const data = this.editCustomerForm.value;
    const id = this.index;
    this.customerService.edit(data, id).subscribe((result: HttpResult) => {
      this.messageService.addMessage(result.message);
      return this.route.navigate(['/customers']);
    });
  }
}
