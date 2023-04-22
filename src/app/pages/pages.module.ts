import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponentsModule } from '../commons/shared/dashboard-components.module';

import { AnimesService } from '../commons/services/animes.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DigimonsComponent } from './dashboard/digimons/digimons.component';
import { MedabotsComponent } from './dashboard/medabots/medabots.component';
import { PokemonsComponent } from './dashboard/pokemons/pokemons.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DigimonsComponent,
    MedabotsComponent,
    PokemonsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DashboardComponentsModule
  ],
  providers: [
    AnimesService,
  ]
})
export class PagesModule { }
