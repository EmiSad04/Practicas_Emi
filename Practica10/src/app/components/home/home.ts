import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  games: any[] = [];

  constructor(private gameService: GameService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames() {
    this.gameService.getGames().subscribe({
      next: (data) => {
        this.games = data;
        console.log("Juegos cargados:", this.games);
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error al obtener juegos:", error);
      }
    });
  }
}