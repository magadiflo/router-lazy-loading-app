import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private _router: Router) { }

  menuList = [
    { path: 'digimons', text: 'Digimons' },
    { path: 'medabots', text: 'Medabots' },
    { path: 'pokemons', text: 'Pokemons' },
  ];

  logout() {
    localStorage.removeItem('access_token');
    localStorage.clear();
    this._router.navigate(['/login']);
  }

}
