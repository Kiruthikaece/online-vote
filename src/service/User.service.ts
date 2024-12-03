import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUserUrl="https://pacific-adaptation-production.up.railway.app/api";


  constructor(private httpClient:HttpClient) { }

  checkUser(aadharNo: string): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUserUrl}/checkUser`, { aadharNo });
  }

  addUser(user: User): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUserUrl}/add-user`, user);
  }
}
