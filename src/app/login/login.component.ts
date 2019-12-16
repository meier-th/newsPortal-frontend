import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CredentialsService } from '../services/credentials.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginControl = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  registerControl = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
  });

  constructor(private loginService : LoginService, private credentials : CredentialsService, 
    private dialogRef: MatDialogRef<LoginComponent>, private snackBar : MatSnackBar) { }
  
  ngOnInit() {
    document.getElementById("registrationContent").hidden = true;
  }

  login() {
    this.loginService.login(this.loginControl.get('username').value, this.loginControl.get('password').value).subscribe(data => {
      this.credentials.setLogin(this.loginControl.get('username').value);
      this.dialogRef.close();
    }, error => {
      this.snackBar.open('Failed to log in!', 'hide', {duration: 800});
    });
  }

  signUp() {
    if (this.registerControl.get('password').value != this.registerControl.get('repeatPassword').value) {
      this.snackBar.open('Passwords do not match', 'hide', {duration: 800});
    }
    else {
      this.loginService.signUp(this.registerControl.get('username').value, this.registerControl.get('password').value).subscribe(response => {
        this.loginService.login(this.registerControl.get('username').value, this.registerControl.get('password').value).subscribe(response => {
          this.credentials.setLogin(this.registerControl.get('username').value);
          this.dialogRef.close();
        }, error => {
          this.dialogRef.close();
        });
      }, error => {
        this.snackBar.open('Username '+this.registerControl.get('username').value+' is occupied.', 'hide', {duration: 800});
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
