import { Component, OnInit } from '@angular/core';
import { AF } from "../providers/af";
import { Router } from "@angular/router"
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../assets/css/bootstrap.min.css', '../../assets/css/material-kit.css', '../../assets/css/demo.css']
})
export class LoginComponent
  {
  users: FirebaseListObservable<any[]>;
  constructor(public afService: AF, private router: Router){}

  login() {
    this.afService.loginWithGoogle().then((data) => {
      // Send them to the homepage if they are logged in
      this.router.navigate(['home']);
    })
  }
}
