import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService{

  categories: Category[] = [
    {
      name: 'Alquiler',
      icon: './../../../assets/icons/restaurant.png'
    },
    {
      name: 'Préstamos',
      icon: './../../../assets/icons/gas.png'
    },
    {
      name: 'Comida',
      icon: './../../../assets/icons/book.png'
    },
    {
      name: 'Electricidad',
      icon: './../../../assets/icons/plane.png'
    },
    {
      name: ' Agua',
      icon: './../../../assets/icons/videogames.png'
    }
  ];

  constructor() { }

  getAllCategories(){

    return this.categories;
  }
}