import { Game } from './../../models/game';
import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css'],
})
export class GotyComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getJuegos().subscribe((rpta) => {
      console.log(rpta);
    });
  }
}
