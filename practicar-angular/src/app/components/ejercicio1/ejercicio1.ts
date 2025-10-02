import { Component, EventEmitter, Input,input, Output} from '@angular/core';

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

  @Input() pais: string = "";

  ciudad = input<string>("");

  @Output() login: EventEmitter<string> = new EventEmitter<string>; // permite que un componente hijo envíe datos o eventos al componente padre.
  usuario: string = "Sara";
  userLogin(){
    this.login.emit(this.usuario);
  }
  

}
