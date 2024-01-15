import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  authenticationState(){

    return this.authenticated.asObservable();
  }

  isAuthenticated(){

    this.authenticated.next(true);
  }

  restartAuthentication(){

    this.authenticated.next(false);
  }

}
