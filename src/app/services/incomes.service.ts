import { Injectable } from '@angular/core';
import { Income } from '../models/income.model';
import { CategoriesService } from './categories.service';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class IncomesService {

  categories: Category[] = [];

  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(){

    this.categories = this.categoriesService.getAllCategories();
  }

  fixed: Income[] = [
    {
      category: this.categories[0],
      quantity: 1100
    },
    {
      category: this.categories[0],
      quantity: 198
    }
  ];

  variables: Income[] = [
    {
      category: this.categories[0],
      quantity: 25
    },
    {
      category: this.categories[0],
      quantity: 33
    }
  ];
}