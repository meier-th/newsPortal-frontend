import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { serverAddress } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

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

  signUp(username: string, password: string) {
    const headers = new HttpHeaders()
            .set("Content-Type", "application/json");
    return this.http.post(serverAddress+'registration', JSON.stringify({username, password}), {headers: headers});
  }

}
