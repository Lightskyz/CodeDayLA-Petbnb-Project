import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../assets/css/bootstrap.min.css', '../../assets/css/material-kit.css', '../../assets/css/demo.css']
})
export class LoginComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  constructor(af: AngularFire){
    this.users = af.database.list('/user');
  }
  private log: string ='test';
  private logText(value: string): void {
        this.log += `Text changed to '${value}'\n`
    }

  ngOnInit() {
  }

}
