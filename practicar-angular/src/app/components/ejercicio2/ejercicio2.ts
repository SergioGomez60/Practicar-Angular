import { Component } from '@angular/core';
import Book from '../../models/book';

@Component({
  selector: 'app-ejercicio2',
  imports: [],
  templateUrl: './ejercicio2.html',
  styleUrl: './ejercicio2.css'
})
export class Ejercicio2 {
  book:Book;

  constructor(){
    this.book = {
      title : "Llados Fitness",
      author : "Tito Llados",
      pages : 300,
      isAvailable : true
    }
  }
}
