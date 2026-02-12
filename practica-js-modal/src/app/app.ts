import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponet } from './contacto-componet/contacto-componet';

@Component({
  selector: 'app-root',
  imports: [ContactoComponet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica-js-modal');
}
