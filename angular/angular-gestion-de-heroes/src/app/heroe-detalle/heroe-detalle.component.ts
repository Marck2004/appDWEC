import { Component, Input } from '@angular/core';
import { Heroe } from '../heroe';
import { FormsModule } from '@angular/forms';
import { NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-heroe-detalle',
  standalone: true,
  imports: [FormsModule,NgIf,UpperCasePipe],
  templateUrl: './heroe-detalle.component.html',
  styleUrl: './heroe-detalle.component.css'
})
export class HeroeDetalleComponent {
  @Input() heroe?: Heroe;
}
