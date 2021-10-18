import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-unit-card',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.scss'],
})
export class UnitCardComponent implements OnInit {
  // @Input() selected: boolean;
  // @Output() selectedChange = new EventEmitter<boolean>();

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

  constructor() {
    // this.selected = false;
  }

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

    console.log(this.units.find((e) => e.title === name));

    // console.log(name);

    //   this.selected = !this.selected;
    //   this.selectedChange.emit(this.selected);
  }
}

type Unit = Array<{
  title: string;
  content: string;
  class: string;
  favorite: boolean;
}>;
