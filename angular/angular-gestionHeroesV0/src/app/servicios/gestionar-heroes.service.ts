import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Heroe } from '../heroe';
import { LISTAHEROES } from '../prueba-heroes';
import { MensajesService } from './mensajes.service';
@Injectable({
  providedIn: 'root'
})
export class GestionarHeroesService {

  constructor(private miMensaje: MensajesService) { }
  getHeroes3(): Heroe[]{
    return LISTAHEROES;
  }
  getHeroes2(): Observable<Heroe[]>{
    return of(LISTAHEROES);
  }
  async getHeroes(): Promise<Heroe[]>{
    //
    this.miMensaje.add("Consultando los heroes");
    return LISTAHEROES;
  }
  getHeroe(id: number): Observable<Heroe|undefined> {
      const heroe=LISTAHEROES.find(heroe => heroe.id === id);
      return of(heroe);
    }
}
