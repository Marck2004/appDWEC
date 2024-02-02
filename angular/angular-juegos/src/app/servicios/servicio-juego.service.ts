import { Injectable } from '@angular/core';
import { Juego } from '../interfaces/juego';
const LISTAJUEGOS:Juego[]=[
  {
    _id:"1",
    titulo:"God of war III",
    descripcion: "Matanza",
    precio: 45,
    pegi:18,
    plataforma:"PS5",
    foto:"/assets/img/foto1.png"
  },
  {
    _id:"2",
    titulo:"Final Fantasy",
    descripcion: "Creativo",
    precio: 40,
    pegi:16,
    plataforma:"PS5",
    foto:"/assets/img/foto2.png"
  }
];
@Injectable({
  providedIn: 'root'
})
export class ServicioJuegoService {

  constructor() { }
  async getJuegos(): Promise<Juego[]|[]>{
    return LISTAJUEGOS;
  }
}
