import { Injectable } from '@angular/core';
import { CredentialsService } from './credentials.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { serverAddress } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  login(username: string, password: string) {
    const parameters = new HttpParams()
        .append('username', username)
        .append('password', password);
    return this.http.post(serverAddress+'login', null,
    {
      params: parameters,
      withCredentials: true
    });
  }

  logout() {
    return this.http.get(serverAddress+'logout');
  }

}
