import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-pet-profile',
  template: `
  <ul>
      <li *ngFor="let pet of pets | async">
        <input type="text" #updatepet [value]="pet.name" />
        <button (click)="updateItem(pet.$key, updatepet.value)">Update</button>
        <button (click)="deleteItem(pet.$key)">Delete</button>
      </li>
    </ul>
    <input type="text" #newpet />
    <button (click)="addItem(newpet.value)">Add</button>
    <button (click)="deleteEverything()">Delete All</button>
  `,
  styleUrls: ['./pet-profile.component.css', '../../assets/css/bootstrap.min.css', '../../assets/css/material-kit.css', '../../assets/css/demo.css', '../../assets/css/normalize.css', '../../assets/css/set1.css' ]
})

export class PetProfileComponent {
   pets: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.pets = af.database.list('/pet');
  }
  addItem(newName: string) {
    this.pets.push({ name: newName });
  }
  updateItem(key: string, newText: string) {
    this.pets.update(key, { name: newText });
  }
  deleteItem(key: string) {
    this.pets.remove(key);
  }
  deleteEverything() {
    this.pets.remove();
  }
}
