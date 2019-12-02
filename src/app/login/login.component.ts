import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CredentialsService } from '../services/credentials.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private username : string;
  private password : string;
  private repeatPassword : string;

  constructor(private loginService : LoginService, private credentials : CredentialsService, 
    private dialogRef: MatDialogRef<LoginComponent>, private snackBar : MatSnackBar) { }
  
  ngOnInit() {
    document.getElementById("registrationContent").hidden = true;
  }

  login() {
    this.loginService.login(this.username, this.password).subscribe(data => {
      this.credentials.setLogin(this.username);
      this.dialogRef.close();
    }, error => {
      this.snackBar.open('Failed to log in!', 'hide', {duration: 800});
    });
  }

  signUp() {
    if (this.repeatPassword != this.password) {
      this.snackBar.open('Passwords do not match', 'hide', {duration: 800});
    }
    else {
      this.loginService.signUp(this.username, this.password).subscribe(response => {
        this.loginService.login(this.username, this.password).subscribe(response => {
          this.credentials.setLogin(this.username);
          this.dialogRef.close();
        }, error => {
          this.dialogRef.close();
        });
      }, error => {
        this.snackBar.open('Username '+this.username+' is occupied.', 'hide', {duration: 800});
      });
  }
  }

  toRegistration() {
    document.getElementById("loginContent").hidden = true;
    document.getElementById("registrationContent").hidden = false;
  }

  toLogin() {
    document.getElementById("loginContent").hidden = false;
    document.getElementById("registrationContent").hidden = true;
  }

}
