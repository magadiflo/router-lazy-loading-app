import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AnimesService } from '../../../commons/services/animes.service';
import { Anime } from '../../../commons/models/animes';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit, OnDestroy {

  private _subscriptionAnime!: Subscription;

  constructor(private _animeService: AnimesService) { }

  ngOnInit(): void {
    this._subscriptionAnime = this._animeService.getAnime('pokemon')
      .subscribe((pokemonList: Anime[]) => {
        console.log(pokemonList);
      });
  }

  ngOnDestroy(): void {
    this._subscriptionAnime.unsubscribe();
  }

}
