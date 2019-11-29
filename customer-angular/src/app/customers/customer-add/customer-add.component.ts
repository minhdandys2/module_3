import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {HttpResult} from '../../core/http-result';
import {MessageService} from '../../service/message.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {
  addCustomerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required]],
    address: ['', [Validators.required]]
  });

  constructor(private customerService: CustomerService,
              private fb: FormBuilder,
              private route: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {
  }

  submit() {
    const data = this.addCustomerForm.value;
    this.customerService.create(data).subscribe((result: HttpResult) => {
      this.messageService.addMessage(result.message);
      return this.route.navigate(['/customers']);
    });
  }

  get name() {
    return this.addCustomerForm.get('name');
  }

  get email() {
    return this.addCustomerForm.get('email');
  }

  get address() {
    return this.addCustomerForm.get('address');
  }
}
