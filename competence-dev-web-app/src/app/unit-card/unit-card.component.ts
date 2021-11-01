import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UNITS } from '../mock-units';

interface Unit {
  name: string;
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

  constructor(private router: Router) {}

  ngOnInit() {}

  toggleFavoriteButton(unitName: string) {
    this.units.find((e, i) => {
      if (e.name === unitName) {
        if (this.units[i].isFavorite === false) {
          this.units[i].isFavorite = true;
        } else {
          this.units[i].isFavorite = false;
        }
      }
    });
  }

  onVisitUnit(unitName: string) {
    this.router.navigate(['/competence'], {
      queryParams: { unit: unitName },
    });
  }
}
