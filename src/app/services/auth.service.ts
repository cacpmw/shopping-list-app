import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  tokenChanged = new Subject<string>();
  constructor(private router: Router) { }

  emitTokenChanged() {
    this.tokenChanged.next(this.token);
  }
  isAuthenticated() {
    return this.token != null;

  }
  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate([""]);
  }
  getToken() {
    firebase.auth().currentUser.getIdToken().then(
      (token: string) => {
        this.token = token;
      }
    );
    return this.token;
  }
  signup(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  signin(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken().then(
            (token: string) => {
              this.token = token;
            }
          )
          // console.log(response);
        }
      ).catch(
        error => console.log(error)
      );
  }
}
