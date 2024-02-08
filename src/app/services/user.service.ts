import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = "http://localhost:8092/api/v1/users";

  constructor(private http: HttpClient) { }

  getAllUsers(){

    
  }
}
