import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatChipsModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-juegos';
}
