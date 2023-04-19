import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../components/header/header.component';
import { MenuComponent } from '../components/menu/menu.component';
import { AnimeComponent } from '../components/anime/anime.component';
import { ModalAnimeComponent } from '../components/modal-anime/modal-anime.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    AnimeComponent,
    ModalAnimeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    AnimeComponent,
    ModalAnimeComponent,
  ],
})
export class DashboardComponentsModule { }
