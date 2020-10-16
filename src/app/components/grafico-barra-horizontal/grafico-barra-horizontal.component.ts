import { GameResult } from './../../models/game';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css'],
})
export class GraficoBarraHorizontalComponent implements OnInit, OnDestroy {
  // options grafica
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';
  colorScheme = 'nightLights';

  @Input() results: GameResult[] = [];

  constructor() {}
  ngOnDestroy() {}

  ngOnInit(): void {}

  onSelect(event) {
    console.log(event);
  }
}
