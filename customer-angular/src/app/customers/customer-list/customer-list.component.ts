import {Component, OnInit} from '@angular/core';
import {ICustomer} from '../ICustomer';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {HttpResult} from '../../core/http-result';
import {MessageService} from '../../service/message.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[] = [];
  message: string;
  keyword: string;

  constructor(private customerService: CustomerService,
              private route: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe((result: HttpResult) => {
      this.customers = result.data;
    });
  }

  delete($id) {
    if (confirm('Ban co chac xoa khong')) {
      this.customerService.delete($id).subscribe((result: HttpResult) => {
        this.messageService.addMessage(result.message);
        this.message = this.messageService.getMessage();
        return this.getAll();
      });
    }
  }

  search() {
    if (this.keyword) {
      this.customers =  this.customers.filter(
        customer => {
          return customer.name.toLowerCase().indexOf(this.keyword) !== -1;
        });
    } else {
      return this.ngOnInit();
    }
  }
}
