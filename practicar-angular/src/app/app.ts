import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio1 } from "./components/ejercicio1/ejercicio1";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ejercicio1, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  city: string = 'Madrid';

  logueado: boolean = false;

  equipos: string[] = ["Barcelona","Atleti","Liverpool"]
}
