import { Component,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {

  game = {
    nombre: '',
    genero: '',
    precio: 0,
    imagenUrl: ''
  };

  constructor(private gameService: GameService, private cdr: ChangeDetectorRef) {}

  onSubmit() {
    this.gameService.createGame(this.game).subscribe({
      next: () => {
        alert("Videojuego agregado correctamente");
        this.cdr.detectChanges();
        this.game = {
          nombre: '',
          genero: '',
          precio: 0,
          imagenUrl: ''
        };
      },
      error: (error) => {
        console.error("Error al guardar:", error);
        alert("Error al guardar el videojuego");
      }
    });
  }
}