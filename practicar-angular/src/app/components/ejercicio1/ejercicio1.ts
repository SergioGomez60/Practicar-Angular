import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  imports: [],
  templateUrl: './ejercicio1.html',
  styleUrl: './ejercicio1.css'
})
export class Ejercicio1 {
  nombre: string = "Sergio";

  numero: number = 0;
  sumaNumero(){
    this.numero++;
  }
  restarNumero(){
    this.numero--;
  }
  reiniciarNumero(){
    this.numero = 0
  }


}
