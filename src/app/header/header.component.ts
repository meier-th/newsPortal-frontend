import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { CredentialsService } from '../services/credentials.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private login : string;
  private currentDate : Date;

  constructor(private dialog: MatDialog, private credentials : CredentialsService, private loginService : LoginService) { }

  ngOnInit() {
    this.credentials.currentUsername.subscribe(name => this.login = name);
    this.currentDate = new Date();
  }

  loginButtonPressed() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  logoutButtonPressed() { 
    this.loginService.logout().subscribe(result => {console.log(result); this.credentials.setLogin('');});
  }

}
