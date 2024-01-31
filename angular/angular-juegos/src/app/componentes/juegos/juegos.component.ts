import { ServicioJuegoService } from './../../servicios/servicio-juego.service';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Juego } from '../../interfaces/juego';


@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.css'
})
export class JuegosComponent {
  juegos:Juego[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


    constructor(private servicioJuegos: ServicioJuegoService){
      this.juegos=[];
    }
    ngOnInit(){
      this.getJuegos();
    }
    getJuegos(){
      this.servicioJuegos.getJuegos().then(juegosRecibidos =>{
        this.juegos=juegosRecibidos;
      })
    }
}
