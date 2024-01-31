import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeriodicitiesService {

  private api = 'http://localhost:8092/api/v1/periodicities'

  periodicities: any = [];

  constructor(private http: HttpClient) { }

  getAllPeriodicities(): Observable<any>{

    return this.http.get<any>(this.api);
  }
}
