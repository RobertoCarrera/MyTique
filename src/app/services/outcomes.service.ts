import { Injectable } from '@angular/core';
import { Outcome } from '../models/outcome.model';
import { CategoriesService } from './categories.service';

@Injectable({
  providedIn: 'root'
})
export class OutcomesService {

  constructor(private categoriesService:CategoriesService) { }

  categories = this.categoriesService.getAllCategories();

  fixed: Outcome[] = [
    {
      category: this.categories[0],
      quantity: 375,
      limit: 375
    },
    {
      category: this.categories[0],
      quantity: 375,
      limit: 288
    },
    {
      category: this.categories[0],
      quantity: 375,
      limit: 190
    },
    {
      category: this.categories[0],
      quantity: 375,
      limit: 63
    },
    {
      category: this.categories[0],
      quantity: 375,
      limit: 28
    }
  ];

  variables: Outcome[] = [
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

  getAllFixOutcomes(){

    return this.fixed;
  }

  getAllOVariableOutcomes(){

    return this.variables;
  }

  calculatePercentage(){

    for(let i=0;i<this.fixed.length;i++)
    {

      this.fixed[i].percentage = (this.fixed[i].quantity/this.fixed[i].limit!)*100;
    }
  }
}