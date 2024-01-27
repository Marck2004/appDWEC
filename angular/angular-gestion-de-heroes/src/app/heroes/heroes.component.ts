import { Heroe } from '../heroe';
import { Component } from '@angular/core';
import { NgFor, UpperCasePipe } from '@angular/common';
import { HeroeDetalleComponent } from '../heroe-detalle/heroe-detalle.component';
import { GestionarHeroesService } from '../servicios/gestionar-heroes.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe,NgFor,HeroeDetalleComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {

  heroes: Heroe[];
  selectedHeroe?: Heroe;
  constructor(private heroeServicio: GestionarHeroesService) {
    this.heroes= [];
 }
  getHeroes(): void {
     this.heroeServicio.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
   ngOnInit() {
      this.getHeroes();
  }

  onSelect(heroe: Heroe): void {
   this.selectedHeroe = heroe;
 }
}
