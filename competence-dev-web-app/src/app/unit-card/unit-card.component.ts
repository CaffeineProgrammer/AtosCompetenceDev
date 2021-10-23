import { Component, OnInit } from '@angular/core';
import { UNITS } from '../mock-units';

interface Unit {
  title: string;
  content: string;
  class: string;
  isFavorite: boolean;
}

@Component({
  selector: 'app-unit-card',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.scss'],
})
export class UnitCardComponent implements OnInit {
  units: Unit[] = UNITS;

  constructor() {}

  ngOnInit() {}

  public toggleFavoriteButton(title: string) {
    this.units.find((e, i) => {
      if (e.title === title) {
        if (this.units[i].isFavorite === false) {
          this.units[i].isFavorite = true;
        } else {
          this.units[i].isFavorite = false;
        }
      }
    });
  }
}
