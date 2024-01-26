import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeroesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:String = 'angular-gestion-de-heroes2';
  nombreUsuario:String = 'Marcos';
  saludo:String = '¡Bienvenido a la sesion!';
}
