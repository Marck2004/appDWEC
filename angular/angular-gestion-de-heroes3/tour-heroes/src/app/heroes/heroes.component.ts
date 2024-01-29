import { Component } from '@angular/core';
import { Heroe } from '../heroe';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroeDetalleComponent } from '../heroe-detalle/heroe-detalle.component';
import { GestionarHeroesService } from '../servicios/gestionar-heroes.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe,FormsModule,HeroeDetalleComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes?:Heroe[];
  selectedHeroe?: Heroe;

  constructor(private miServicio: GestionarHeroesService){
    this.heroes=[];
  }

  ngOnInit(){
    this.consultarHeroes();
  }

  consultarHeroes(){
    this.heroes = this.miServicio.getHeroes();
  }

  onSelect(heroe:Heroe){
    this.selectedHeroe = heroe;
  }
}
