import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-pet-lover',
  templateUrl: './pet-lover.component.html',
  styleUrls: ['./pet-lover.component.css']
})
export class PetLoverComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire){
    this.items = af.database.list('/user');
  }
  ngOnInit() {
  }

}
