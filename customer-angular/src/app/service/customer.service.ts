import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICustomer} from '../customers/ICustomer';
import {HttpResult} from '../core/http-result';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  Url = 'http://localhost:8000/api/customers';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<HttpResult> {
    return this.http.get<HttpResult>(this.Url);
  }

  findById(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(this.Url + '/' + id);
  }

  create(customer: ICustomer): Observable<HttpResult> {
    return this.http.post<HttpResult>(this.Url + '/create', customer);
  }

  edit(customer: ICustomer, index: number): Observable<HttpResult> {
    return this.http.put<HttpResult>(this.Url + '/' + index + '/edit', customer);
  }

  delete(id: number): Observable<HttpResult> {
    return this.http.get<HttpResult>(this.Url + '/' + id + '/delete');
  }
}
