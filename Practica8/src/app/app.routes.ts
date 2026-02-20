import { Routes } from '@angular/router';
import { Tabla } from './tabla/tabla';

export const routes: Routes = [
  { path: 'tabla', component: Tabla },
  { path: '', redirectTo: 'tabla', pathMatch: 'full' }
];