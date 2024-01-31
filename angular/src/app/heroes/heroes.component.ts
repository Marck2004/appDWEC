import { Component } from '@angular/core';
import { Heroe } from '../heroe';
import { NgFor} from '@angular/common';
import { GestionarHeroesService } from '../servicios/gestionar-heroes.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [RouterOutlet,RouterModule,NgFor],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  heroes?: Heroe[];
  selectedHeroe?: Heroe;

  constructor(private miServicio: GestionarHeroesService){
    this.heroes=[];
  }

  ngOnInit(){
    this.consultarHeroes();
  }
  consultarHeroes3(){
    this.heroes=this.miServicio.getHeroes3();
  }

  consultarHeroes2(){
    this.miServicio.getHeroes2().subscribe(datos=>{
      this.heroes= datos;
    });
  }

  consultarHeroes(){
    this.miServicio.getHeroes().then(datos=>{
      this.heroes= datos;
    });
  }
  onSelect(heroe: Heroe){
    this.selectedHeroe = heroe;
  }
}
