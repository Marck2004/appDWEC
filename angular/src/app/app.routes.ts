import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroeDetalleComponent } from './heroe-detalle/heroe-detalle.component';

export const routes: Routes = [
  { path: '', redirectTo:  '/dashboard', pathMatch: 'full'},
  { path: "heroes", component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detalle/:id', component: HeroeDetalleComponent },
];
