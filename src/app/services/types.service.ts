import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  private api = "http://localhost:8092/api/b1"

  constructor(private http: HttpClient) {}

  getAllTypes(): Observable<any>{

    return this.http.get<any>(this.api);
  }
}
