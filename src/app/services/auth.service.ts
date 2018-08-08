import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signup(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  signin(email: string, password: string) {
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(
        response => console.log(response)
      ).catch(
        error => console.log(error)     
      );
  }
}
