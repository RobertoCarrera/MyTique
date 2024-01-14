import { Injectable } from '@angular/core';
import { Outcome } from '../models/outcome.model';
import { CategoriesService } from './categories.service';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class OutcomesService{

  categories: Category[] = [];  
  fixed: Outcome[] = [];
  variables: Outcome[] = [];

  constructor(private categoriesService:CategoriesService) { 

    this.categories = this.categoriesService.getAllCategories();

    this.fixed = [
      {
        category: this.categories[0],
        quantity: 375,
        limit: 375
      },
      {
        category: this.categories[1],
        quantity: 288,
        limit: 288
      },
      {
        category: this.categories[2],
        quantity: 120,
        limit: 190
      },
      {
        category: this.categories[3],
        quantity: 28,
        limit: 52
      },
      {
        category: this.categories[4],
        quantity: 32,
        limit: 65
      }
    ];

    this.variables = [
      {
        category: this.categories[0],
        quantity: 25,
        date: new Date(2023, 11, 30)
      },
      {
        category: this.categories[0],
        quantity: 33,
        date: new Date(2024, 0, 4)
      },
      {
        category: this.categories[0],
        quantity: 22,
        date: new Date(2024, 0, 8)
      },
      {
        category: this.categories[0],
        quantity: 23,
        date: new Date(2024, 0, 7)
      },
      {
        category: this.categories[0],
        quantity: 15,
        date: new Date(2024, 0, 5)
      },
      {
        category: this.categories[0],
        quantity: 12,
        date: new Date(2024, 0, 5)
      },
      {
        category: this.categories[0],
        quantity: 11,
        date: new Date(2024, 0, 2)
      },
      {
        category: this.categories[0],
        quantity: 19,
        date: new Date(2024, 0, 2)
      },
      {
        category: this.categories[0],
        quantity: 21,
        date: new Date(2024, 0, 2)
      }
    ];

    this.calculatePercentage();
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