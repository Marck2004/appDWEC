import { Component } from '@angular/core';
import { Heroe } from '../heroe';
import { GestionarHeroesService } from '../servicios/gestionar-heroes.service';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,RouterModule,NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  heroes: Heroe[] = [];

  constructor(private gestionarHeroesService: GestionarHeroesService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.gestionarHeroesService.getHeroes2()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
