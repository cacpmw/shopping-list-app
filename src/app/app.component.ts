import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    let config = {
      apiKey: environment.apiKey,
      authDomain: environment.authDomain,
    };
    firebase.initializeApp(config);
  }
}
