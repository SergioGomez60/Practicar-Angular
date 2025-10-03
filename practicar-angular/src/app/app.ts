import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio1 } from "./components/ejercicio1/ejercicio1";
import { FormsModule } from '@angular/forms';
import { Ejercicio2 } from "./components/ejercicio2/ejercicio2";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ejercicio1, FormsModule, Ejercicio2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  city: string = 'Madrid';

  logueado: boolean = false;

  equipos: string[] = ["Barcelona","Atleti","Liverpool"]

  pais = "Noruega";

  ciudad = "Novés";

  usuario:string = "";

  userLogin2(e:string){
    this.usuario = e;
  }
}
