import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  private login = new BehaviorSubject<string>("");
  currentUsername = this.login.asObservable();

  logout() {
    this.login.next("");
  }

  setLogin(newLogin: string) {
    this.login.next(newLogin);
  }

  constructor() { }
}
