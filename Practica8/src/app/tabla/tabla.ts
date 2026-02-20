import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.html',
  styleUrl: './tabla.css'
})
export class Tabla implements OnInit {

  listaEventos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
  console.log("ngOnInit ejecutado");

  this.http.get<any[]>('http://127.0.0.1:5000/eventos')
    .subscribe(data => {
      console.log("Datos recibidos:", data);
      this.listaEventos = data;
    });
}
    }