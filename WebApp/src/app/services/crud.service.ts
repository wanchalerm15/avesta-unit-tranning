import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICRUD } from '../abstracts/ICRUD.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CRUDService implements ICRUD.Service {
  private domain: string = 'http://localhost:63802/api/member';

  constructor(private http: HttpClient) { }

  Items(): Observable<ICRUD.IMember[]> {
    return this.http.get<any>(this.domain);
  }

  ItemById(id: number): Observable<ICRUD.IMember> {
    return this.http.get<any>(`${this.domain}/${id}`);
  }

  Create(value: ICRUD.IMember): Observable<ICRUD.IMember> {
    return this.http.post<any>(this.domain, value);
  }

  Update(id: number, value: ICRUD.IMember): Observable<ICRUD.IMember> {
    return this.http.put<any>(`${this.domain}/${id}`, value);
  }

  Delete(id: number): Observable<void> {
    return this.http.delete<any>(`${this.domain}/${id}`);
  }

}
