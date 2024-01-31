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
=======
  private api = 'http://localhost:8092/api/v1/categories';
>>>>>>> Stashed changes

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {

    return this.http.get<Category[]>(this.api);
  }
}