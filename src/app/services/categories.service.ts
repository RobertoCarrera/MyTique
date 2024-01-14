import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService{

  categories: Category[] = [
    {
      name: 'Restaurantes',
      icon: './../../../assets/icons/restaurant.png'
    },
    {
      name: ' Gasolina',
      icon: './../../../assets/icons/gas.png'
    },
    {
      name: ' Libros',
      icon: './../../../assets/icons/book.png'
    },
    {
      name: ' Viajes',
      icon: './../../../assets/icons/plane.png'
    },
    {
      name: ' Videojuegos',
      icon: './../../../assets/icons/videogames.png'
    }
  ];

  constructor() { }

  getAllCategories(){

    return this.categories;
  }
}