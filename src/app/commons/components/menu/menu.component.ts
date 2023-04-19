import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuList = [
    { path: 'digimons', text: 'Digimons' },
    { path: 'medabots', text: 'Medabots' },
    { path: 'pokemons', text: 'Pokemons' },
  ];
}
