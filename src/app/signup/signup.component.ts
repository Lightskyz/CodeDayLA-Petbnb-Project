import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-signup',
  template: `<ul>
  <div class="col-md-6">
    <input type="text" #newEmail placeholder="Email" />
    <input type="password" #newPassword placeholder="Password" />
  </div>
  <div class="col-md-6">
    <input type="text" #newName placeholder="First Name" />
    <input type="text" #newAge placeholder="Age" />
    <input type="text" #newCity placeholder="City" />
    <input type="text" #newState placeholder="State" />
    <input type="text" #newZipCode placeholder="Zip Code" />
  </div>
    <button (click)="addUser(newEmail.value, newPassword.value, newName.value, newAge.value, newCity.value, newState.value, newZipCode.value)" routerLink="/profile-choice">Create an account</button>
    </ul>`,
  styleUrls: ['./signup.component.css', '../../assets/css/bootstrap.min.css', '../../assets/css/material-kit.css', '../../assets/css/demo.css']
})
export class SignupComponent {
  users: FirebaseListObservable<any[]>;
  constructor(public af: AngularFire) {
      this.users = af.database.list('/user')
    }

  addUser(newEmail: string, newPassword: string, newName:string, newAge: number, newCity: string, newState: string, newZipCode: number ) {
    this.users.push({ username: newEmail, password: newPassword, firstName: newName, age: newAge, city: newCity, state: newState, zipcode: newZipCode  });
  }
}
