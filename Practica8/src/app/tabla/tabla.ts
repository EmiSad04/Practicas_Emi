import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosService } from '../services/eventos';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.html',
})
export class Tabla implements OnInit {

  eventosLista: any[] = [];

  constructor(private eventos: EventosService) {}

 ngOnInit() {
  this.eventos.obtenerEventos().subscribe((data: any[]) => {
    console.log("Datos recibidos:", data);
    this.eventosLista = data;
  });
}
}
