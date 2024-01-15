import { Injectable } from '@angular/core';
import { Income } from '../models/income.model';
import { CategoriesService } from './categories.service';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class IncomesService {

  categories: Category[] = [];
  fixed: Income[] = [];
  variables: Income[] = [];

  constructor(private categoriesService:CategoriesService) { 

    this.categories = this.categoriesService.getAllCategories();

    this.fixed = [
      {
        category: this.categories[0],
        quantity: 1100
      },
      {
        category: this.categories[6],
        quantity: 198
      }
    ];
  
    this.variables = [
      {
        category: this.categories[7],
        quantity: 25
      },
      {
        category: this.categories[8],
        quantity: 33
      }
    ];
  }


  getAllFixedIncomes(){

    return this.fixed;
  }

  getAllOVariableIncomes(){

    return this.variables;
  }
}