import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CredentialsService } from '../services/credentials.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private username : string;
  private password : string;

  constructor(private loginService : LoginService, private credentials : CredentialsService, private dialogRef: MatDialogRef<LoginComponent>) { }
  
  ngOnInit() {
  }

  login() {
    console.log("logging in...");
    this.loginService.login(this.username, this.password).subscribe(data => {
      this.credentials.setLogin(this.username);
      console.log("success");
      this.dialogRef.close();
    }, error => {
      console.log(error);
    });
  }

}
