import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService{

<<<<<<< Updated upstream
  categories: Category[] = [
    {
      name: 'Alquiler',
      icon: './../../../assets/icons/rent.png'
    },
    {
      name: 'Préstamos',
      icon: './../../../assets/icons/loan.png'
    },
    {
      name: 'Comida',
      icon: './../../../assets/icons/food.png'
    },
    {
      name: 'Electricidad',
      icon: './../../../assets/icons/electricity.png'
    },
    {
      name: ' Agua',
      icon: './../../../assets/icons/water.png'
    },
    {
      name: ' Restaurante',
      icon: './../../../assets/icons/restaurant.png'
    },
    {
      name: ' Extras',
      icon: './../../../assets/icons/extra.png'
    },
    {
      name: ' Crypto',
      icon: './../../../assets/icons/crypto.png'
    },
    {
      name: ' Wallapop',
      icon: './../../../assets/icons/wallapop.png'
    }
  ];
=======
  private api = 'http://localhost:8092/api/v1/categories';
>>>>>>> Stashed changes

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {

    return this.http.get<Category[]>(this.api);
  }
}