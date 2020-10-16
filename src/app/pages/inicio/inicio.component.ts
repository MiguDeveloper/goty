import { Game, GameResult } from './../../models/game';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  resultados: GameResult[] = [];

  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.db
      .collection('goty')
      .valueChanges()
      .pipe(
        map((rpta: Game[]) => {
          return rpta.map(({ name, votos }) => ({ name, value: votos }));
        })
      )
      .subscribe((rpta) => {
        this.resultados = rpta;
      });
  }
}
