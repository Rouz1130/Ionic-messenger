import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { SigninPage } from '../pages/signin/signin';

const config = {
  apiKey:"AIzaSyAE8vi8Q6k5eT3KW8TvSlSmBsCdIan3lOQ",
  authDomain: "geotracker-7a667.firebaseapp.com",
  databaseURL: "https://geotracker-7a667.firebaseio.com",
  projectId: "geotracker-7a667",
  storageBucket: "geotracker-7a667.appspot.com",
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

