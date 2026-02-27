import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.html',
  styleUrl: './listado.css'
})
export class Listado implements OnInit {

  games: any[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames() {
  this.gameService.getGames().subscribe({
    next: (data) => {
      console.log("Datos crudos desde el servidor:", data); // Revisa esto en la consola (F12)
      this.games = data;
    },
    error: (error) => {
      console.error("No se pudo conectar con el backend. ¿Está encendido Flask?", error);
    }
  });
}

  deleteGame(id: string) {
    if (confirm("¿Seguro que deseas eliminar este videojuego?")) {
      this.gameService.deleteGame(id).subscribe({
        next: () => {
          alert("Juego eliminado correctamente");
          this.loadGames();
        },
        error: (error) => {
          console.error("Error al eliminar:", error);
        }
      });
    }
  }
}