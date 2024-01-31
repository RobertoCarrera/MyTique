import { Injectable } from '@angular/core';
import { Income } from '../models/income.model';
import { CategoriesService } from './categories.service';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomesService {

  private api = 'http://localhost:8092/api/v1/incomes';

  categories: Category[] = [];
  fixed: Income[] = [];
  variables: Income[] = [];

<<<<<<< Updated upstream
  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(){

    this.categories = this.categoriesService.getAllCategories();

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
=======
  constructor(private http: HttpClient,
    private categoriesService: CategoriesService) { 

    this.categoriesService.getAllCategories().subscribe (result => {

      this.categories = result;
    });

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

  getAllIncomes(): Observable<Income[]> {

    return this.http.get<Income[]>(this.api);
  }

>>>>>>> Stashed changes

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