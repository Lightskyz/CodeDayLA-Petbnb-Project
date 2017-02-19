import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-pet-profile',
  template: `

    <input type="text" #newname placeholder="Pet Name"/>

    <input type="text" #newtype placeholder="Type of Pet"/>

    <input type="text" #newnote placeholder="Description of Pet"/>

    <button (click)="addItem(newname.value, newnote.value, newtype.value)" routerLink='/pet-lover-component'>Register your pet</button>
  `,
  styleUrls: ['./pet-profile.component.css', '../../assets/css/bootstrap.min.css', '../../assets/css/material-kit.css', '../../assets/css/demo.css', '../../assets/css/normalize.css', '../../assets/css/set1.css' ]
})

export class PetProfileComponent {
   pets: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.pets = af.database.list('/pet');
  }
  addItem(newName: string, newType: string, newNote: string) {
    this.pets.push({ name: newName, type: newType, description: newNote });
  }


}
