import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAwesome} from '../awesomes/iawesome';
import {Observable} from 'rxjs';

class HttpResult {
}

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {
  Url = '  http://localhost:3000/awesomes';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IAwesome[]> {
    return this.http.get<IAwesome[]>(this.Url);
  }

  findById(id: number): Observable<IAwesome> {
    return this.http.get<IAwesome>(this.Url + '/' + id);
  }

  delete(id: number): Observable<IAwesome> {
    return this.http.delete<IAwesome>(this.Url + '/' + id);
  }

  update(awesome, id): Observable<IAwesome> {
    return this.http.put<IAwesome>(this.Url + '/' + id, awesome);
  }

  store(awesome): Observable<IAwesome> {
    return this.http.post<IAwesome>(this.Url , awesome);
  }
}
