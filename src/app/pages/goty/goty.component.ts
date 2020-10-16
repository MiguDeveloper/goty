import { Game } from './../../models/game';
import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css'],
})
export class GotyComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.obtenerJuegos();
  }

  obtenerJuegos() {
    this.gameService.getJuegos().subscribe((rpta) => {
      if (rpta.isSuccess) {
        this.games = rpta.data;
      }
    });
  }

  votarPorJuego(game: Game) {
    this.gameService.votarJuego(game.id).subscribe(
      (rpta) => {
        if (rpta.isSuccess) {
          Swal.fire('Exito', rpta.message, 'success');
        }
      },
      (error) => {
        Swal.fire('Error: ', error.error.message, 'error');
      }
    );
  }
}
