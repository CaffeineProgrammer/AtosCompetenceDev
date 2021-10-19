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
      class: 'unit-card-container__blue',
      favorite: false,
    },
    {
      title: '.NET',
      content: 'test',
      class: 'unit-card-container__blue',
      favorite: false,
    },
    {
      title: 'Testing',
      content: 'test',
      class: 'unit-card-container__green',
      favorite: false,
    },
    {
      title: 'Low Coding',
      content: 'test',
      class: 'unit-card-container__green',
      favorite: false,
    },
    {
      title: 'Business Analyse',
      content: 'test',
      class: 'unit-card-container__purple',
      favorite: false,
    },
    {
      title: 'Oracle',
      content: 'test',
      class: 'unit-card-container__purple',
      favorite: false,
    },
    {
      title: 'Cloud',
      content: 'test',
      class: 'unit-card-container__red',
      favorite: false,
    },
    {
      title: 'Agile',
      content: 'test',
      class: 'unit-card-container__red',
      favorite: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  public toggleFavoriteButton(name: string) {
    this.units.find((e, i) => {
      if (e.title === name) {
        if (this.units[i].favorite === false) {
          this.units[i].favorite = true;
        } else {
          this.units[i].favorite = false;
        }
      }
    });
  }
}

type Unit = Array<{
  title: string;
  content: string;
  class: string;
  favorite: boolean;
}>;
