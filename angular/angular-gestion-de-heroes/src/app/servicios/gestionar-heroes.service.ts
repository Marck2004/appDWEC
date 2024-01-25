import { MensajesService } from './mensajes.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LISTAHEROES} from '../prueba-heroes';
import { Heroe}  from '../heroe';


@Injectable({
  providedIn: 'root'
})
export class GestionarHeroesService {

  constructor(private MensajesServicio:MensajesService) { }
  getHeroes(): Observable<Heroe[]> {
    this.MensajesServicio.add('Servicio heroes: recuperando heroes');
    return of(LISTAHEROES)};
}
