import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyBSm4cuxuA4VWLbjVvgCeWGCD5_CmPYero',
  authDomain: 'airbnb-for-pet.firebaseapp.com',
  databaseURL: 'https://airbnb-for-pet.firebaseio.com',
  storageBucket: 'airbnb-for-pet.appspot.com',
  messagingSenderId: '304744295505'
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
