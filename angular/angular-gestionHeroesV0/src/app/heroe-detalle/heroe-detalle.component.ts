import { Component,Input } from '@angular/core';
import { Heroe } from '../heroe';
import { NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GestionarHeroesService } from '../servicios/gestionar-heroes.service';
@Component({
  selector: 'app-heroe-detalle',
  standalone: true,
  imports: [NgIf, UpperCasePipe, FormsModule],
  templateUrl: './heroe-detalle.component.html',
  styleUrl: './heroe-detalle.component.css'
})
export class HeroeDetalleComponent {
  heroe?: Heroe;

  constructor(
    private route: ActivatedRoute,
    private gestionarHeroesService: GestionarHeroesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeroe();
  }

  getHeroe(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gestionarHeroesService.getHeroe(id)
      .subscribe(heroe => this.heroe = heroe);
  }

  goBack(): void {
    this.location.back();
  }
}
