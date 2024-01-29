import { Injectable } from '@angular/core';
import { Heroe } from '../heroe';
import { LISTAHEROES } from '../prueba-heroes';
@Injectable({
  providedIn: 'root'
})
export class GestionarHeroesService {

  constructor() { }
  getHeroes(): Heroe[]{
    return LISTAHEROES;
  }
}
