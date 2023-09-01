import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<any> {
    const url = `${this.baseUrl}/api/register`;
    console.log(url);
    return this.http.post<string>(url, user);
  }

}
