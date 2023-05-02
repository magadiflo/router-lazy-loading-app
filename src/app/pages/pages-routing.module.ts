import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DigimonsComponent } from './dashboard/digimons/digimons.component';
import { MedabotsComponent } from './dashboard/medabots/medabots.component';
import { PokemonsComponent } from './dashboard/pokemons/pokemons.component';

import { animeGuard } from '../commons/guards/anime.guard';
import { animeChildGuard } from '../commons/guards/anime-child.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [animeGuard],
    canActivateChild: [animeChildGuard], // Cuando naveguemos por las rutas hijas: /digimons, /medabots, /pokemons, se ejecutará este guard.
    children: [
      { path: 'digimons', component: DigimonsComponent, },
      { path: 'medabots', component: MedabotsComponent, },
      { path: 'pokemons', component: PokemonsComponent, },
      { path: '**', redirectTo: 'digimons', },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
