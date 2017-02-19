import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-kennel-profile',

  template: ` 
  			  		<input type="text" #address placeholder="Address"/>
  			  		<input type="text" #city placeholder="City"/>
  			  		<input type="text" #state placeholder="State"/>
  			  		<input type="text" #zipcode placeholder="Zipcode"/>
  			  		<input type="text" #price placeholder="Price"/>
  			   		<button class="button"(click)="addItem(address.value, city.value, state.value, zipcode.value, price.value )" routerLink="/pet-lover-component">Add</button>
  			  
  			`,
  styleUrls: ['./kennel-profile.component.css', '../../assets/css/bootstrap.min.css', '../../assets/css/material-kit.css', '../../assets/css/demo.css']
})
export class KennelProfileComponent{
	place: FirebaseListObservable<any []>
  constructor(af: AngularFire) { 
  	this.place = af.database.list('/place');
  }
  
  addItem(newAddress: string, newCity: string, newState: string, newZipcode: string, newPrice: string) {
  	this.place.push({address: newAddress, city: newCity, state: newState, zipcode: newZipcode, price: newPrice})
  	;
  }	 

}
