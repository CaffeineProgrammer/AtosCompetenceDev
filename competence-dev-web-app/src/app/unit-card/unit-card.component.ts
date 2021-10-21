import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-card',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.scss'],
})
export class UnitCardComponent implements OnInit {
  units: Unit = [
    {
      title: 'Java',
      content: 'test',
      class: 'unit-card-container--blue',
      isFavorite: false,
    },
    {
      title: '.NET',
      content: 'test',
      class: 'unit-card-container--blue',
      isFavorite: false,
    },
    {
      title: 'Testing',
      content: 'test',
      class: 'unit-card-container--green',
      isFavorite: false,
    },
    {
      title: 'Low Coding',
      content: 'test',
      class: 'unit-card-container--green',
      isFavorite: false,
    },
    {
      title: 'Business Analyse',
      content: 'test',
      class: 'unit-card-container--purple',
      isFavorite: false,
    },
    {
      title: 'Oracle',
      content: 'test',
      class: 'unit-card-container--purple',
      isFavorite: false,
    },
    {
      title: 'Cloud',
      content: 'test',
      class: 'unit-card-container--red',
      isFavorite: false,
    },
    {
      title: 'Agile',
      content: 'test',
      class: 'unit-card-container--red',
      isFavorite: false,
    },
  ];

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

type Unit = Array<{
  title: string;
  content: string;
  class: string;
  isFavorite: boolean;
}>;
