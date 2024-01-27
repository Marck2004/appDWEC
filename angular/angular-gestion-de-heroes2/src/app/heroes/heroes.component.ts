import { Heroe } from './../heroe';
import { Component } from '@angular/core';
import { NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LISTAHEROES } from '../pruebaHeroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe,FormsModule,NgIf],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent{
  heroes:Heroe[] = LISTAHEROES;
  selectedHeroe:Heroe = this.heroes[0];

  asignar(heroe:Heroe){
    this.selectedHeroe = heroe;
  }

}
