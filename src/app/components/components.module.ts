import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [NavbarComponent, GraficoBarraHorizontalComponent],
  imports: [BrowserAnimationsModule, NgxChartsModule, CommonModule, ComponentsRoutingModule],
  exports: [NavbarComponent, GraficoBarraHorizontalComponent],
})
export class ComponentsModule {}
