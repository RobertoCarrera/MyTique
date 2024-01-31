import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService{

  private api = 'http://localhost:8092/api/v1/categories';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {

    return this.http.get<Category[]>(this.api);
  }
}