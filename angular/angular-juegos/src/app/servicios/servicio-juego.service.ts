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
/* const url = 'https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=%3CREQUIRED%3E';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e3cf6ba7cfmshabb56c9e92168c0p14b60cjsnbc83c746cbec',
		'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/
