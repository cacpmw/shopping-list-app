import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    let config = {
      apiKey: "AIzaSyDcMKiZ9vmj_K1T6MOsnt8hBLSgRsCNg70",
      authDomain: "ng-shopping-list-542c1.firebaseapp.com",
    };
    firebase.initializeApp(config);
  }
}
