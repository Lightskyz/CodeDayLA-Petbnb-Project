import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-pet-lover',
  templateUrl: './pet-lover.component.html',
  styleUrls: ['./pet-lover.component.css']
})
export class PetLoverComponent implements OnInit {
  places: FirebaseListObservable<any[]>;
  users: FirebaseListObservable<any[]>;
  constructor(af: AngularFire){
    this.places = af.database.list('/place');
    this.users = af.database.list('/user');
  }
  ngOnInit() {
  }

}
