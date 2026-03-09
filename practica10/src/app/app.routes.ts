import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Formulario } from './components/formulario/formulario';
import { Listado } from './components/listado/listado';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'agregar', component: Formulario },
  { path: 'eliminar', component: Listado }
];