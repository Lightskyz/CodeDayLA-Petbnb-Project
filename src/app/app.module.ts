import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { AngularFireModule, AuthMethods, AuthProviders  } from 'angularfire2';
import { PetLoverComponent } from './pet-lover/pet-lover.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { KennelProfileComponent } from './kennel-profile/kennel-profile.component';
import { KennelComponent } from './kennel/kennel.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AcceptationComponent } from './acceptation/acceptation.component';
import { RatingComponent } from './rating/rating.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileChoiceComponent } from './profile-choice/profile-choice.component';

const appRoutes: Routes = [
  { path: 'pet-lover-component', component: PetLoverComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: WelcomeComponent },
  { path: 'pet-profile', component: PetProfileComponent },
  { path: 'kennel-profile', component: KennelProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile-choice', component: ProfileChoiceComponent },
];

export const firebaseConfig = {
  apiKey: 'AIzaSyBSm4cuxuA4VWLbjVvgCeWGCD5_CmPYero',
  authDomain: 'airbnb-for-pet.firebaseapp.com',
  databaseURL: 'https://airbnb-for-pet.firebaseio.com',
  storageBucket: 'airbnb-for-pet.appspot.com',
  messagingSenderId: '304744295505'
};

@NgModule({
  declarations: [AppComponent, PetLoverComponent, LoginComponent, HomeComponent, SignupComponent, PetProfileComponent, KennelProfileComponent, KennelComponent, ReservationComponent, AcceptationComponent, RatingComponent, WelcomeComponent, ProfileChoiceComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, {
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
