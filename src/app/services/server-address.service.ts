import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerAddressService {

  private host ='127.0.0.1';
  private port = 7070;

  constructor() { }

  getAddress() : String {
    return this.host + ':' + this.port + '/';
  }

}
