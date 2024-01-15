import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService{

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

  constructor() { }

  getAllCategories(){

    return this.categories;
  }
}