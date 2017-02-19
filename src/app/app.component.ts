import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { AF } from "./providers/af";
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: boolean;
  constructor(public afService: AF, private router: Router){
    this.afService.af.auth.subscribe(
      (auth) => {
        if(auth == null) {
          console.log("Not Logged in.");
          this.router.navigate(['login']);
          this.isLoggedIn = false;
        }
        else {
          console.log("Successfully Logged in.");
          this.isLoggedIn = true;
          // UPDATE: I forgot this at first. Without it when a user is logged in and goes directly to /login
          // the user did not get redirected to the home page.
          this.router.navigate(['home']);
        }
      }
    );
  }
    logout() {
      this.afService.logout();
  }
}
