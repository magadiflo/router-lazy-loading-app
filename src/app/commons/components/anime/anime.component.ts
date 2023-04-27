import { Component, Input } from '@angular/core';

import { Anime } from '../../models/animes';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent {

  @Input() name!: string;
  @Input() description!: string;
  @Input() urlImg!: string;

}
