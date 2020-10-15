import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css'],
})
export class GraficoBarraHorizontalComponent implements OnInit, OnDestroy {
  results: any[] = [
    {
      name: 'Juego1',
      value: 20,
    },
    {
      name: 'Juego2',
      value: 25,
    },
    {
      name: 'Juego3',
      value: 15,
    },
    {
      name: 'Juego4',
      value: 30,
    },
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  intervalo;

  constructor() {
    this.intervalo = setInterval(() => {
      const nuevoResults = [...this.results];
      nuevoResults.forEach((item) => {
        const valor = Math.round(Math.random() * 500);
        item.value = valor;
      });
      this.results = [...nuevoResults];
    }, 1500);
  }
  ngOnDestroy() {
    clearInterval(this.intervalo);
  }

  ngOnInit(): void {}

  onSelect(event) {
    console.log(event);
  }
}
