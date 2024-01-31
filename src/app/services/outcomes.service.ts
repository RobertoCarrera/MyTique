import { Injectable } from '@angular/core';
import { Outcome } from '../models/outcome.model';
import { CategoriesService } from './categories.service';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutcomesService{

  private api = 'http://localhost:8092/api/v1/outcomes';

  categories: Category[] = [];  
  fixed: Outcome[] = [];
  variables: Outcome[] = [];

  constructor(private http: HttpClient,
    private categoriesService:CategoriesService) { 

    this.categoriesService.getAllCategories().subscribe (result => {

      this.categories = result;
    });

    this.variables = [
      {
        category: this.categories[5],
        quantity: 25,
        date: new Date(2023, 11, 30)
      },
      {
        category: this.categories[5],
        quantity: 33,
        date: new Date(2024, 0, 4)
      },
      {
        category: this.categories[5],
        quantity: 22,
        date: new Date(2024, 0, 8)
      },
      {
        category: this.categories[5],
        quantity: 23,
        date: new Date(2024, 0, 7)
      },
      {
        category: this.categories[5],
        quantity: 15,
        date: new Date(2024, 0, 5)
      },
      {
        category: this.categories[5],
        quantity: 12,
        date: new Date(2024, 0, 5)
      },
      {
        category: this.categories[5],
        quantity: 11,
        date: new Date(2024, 0, 2)
      },
      {
        category: this.categories[5],
        quantity: 19,
        date: new Date(2024, 0, 2)
      },
      {
        category: this.categories[5],
        quantity: 21,
        date: new Date(2024, 0, 2)
      }
    ];

    this.variables = [
      {
        category: this.categories[5],
        quantity: 25,
        date: new Date(2023, 11, 30)
      },
      {
        category: this.categories[5],
        quantity: 33,
        date: new Date(2024, 0, 4)
      },
      {
        category: this.categories[5],
        quantity: 22,
        date: new Date(2024, 0, 8)
      },
      {
        category: this.categories[5],
        quantity: 23,
        date: new Date(2024, 0, 7)
      },
      {
        category: this.categories[5],
        quantity: 15,
        date: new Date(2024, 0, 5)
      },
      {
        category: this.categories[5],
        quantity: 12,
        date: new Date(2024, 0, 5)
      },
      {
        category: this.categories[5],
        quantity: 11,
        date: new Date(2024, 0, 2)
      },
      {
        category: this.categories[5],
        quantity: 19,
        date: new Date(2024, 0, 2)
      },
      {
        category: this.categories[5],
        quantity: 21,
        date: new Date(2024, 0, 2)
      }
    ];

    this.calculatePercentage();
  }

  
  getAllIncomes(): Observable<Outcome[]> {

    return this.http.get<Outcome[]>(this.api);
  }

  getAllFixedOutcomes(){

    return this.fixed;
  }

  getAllOVariableOutcomes(){

    return this.variables;
  }

  calculatePercentage(){

    for(let i=0;i<this.fixed.length;i++)
    {

      this.fixed[i].percentage = Math.round((this.fixed[i].quantity/this.fixed[i].limit!)*100);
    }
  }
}