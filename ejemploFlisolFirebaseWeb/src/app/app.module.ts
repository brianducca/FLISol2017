import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// incluido para firebase
import { AngularFireModule } from 'angularfire2';
// incluido para firebase
export const firebaseConfig = {
  apiKey: "AIzaSyDpeeXIwqO-og9bZ7lvMi8I4S6NTDSqMvM",
    authDomain: "testfrisol.firebaseapp.com",
    databaseURL: "https://testfrisol.firebaseio.com",
    projectId: "testfrisol",
    storageBucket: "testfrisol.appspot.com",
    messagingSenderId: "810582055255"
};
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      // incluido para firebase
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
