import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'MyTique';
  authenticated: Observable<boolean> = of(false);

  constructor(private authenticationService: AuthenticationService){}

  ngOnInit(){

    this.authenticated = this.authenticationService.authenticationState();
  }
}