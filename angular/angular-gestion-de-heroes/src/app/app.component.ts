import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MensajesService } from './servicios/mensajes.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeroesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Gestion de Heroes';
  constructor(private servicioMensajeria:MensajesService){
    this.titulo = this.servicioMensajeria.mostrarMensajes() +" "+
    this.titulo;
  }

}
