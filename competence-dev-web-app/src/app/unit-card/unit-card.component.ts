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
      button: 'button-container__blue',
    },
    {
      title: '.NET',
      content: 'test',
      class: 'unit-card-container__blue',
      button: 'button-container__blue',
    },
    {
      title: 'Testing',
      content: 'test',
      class: 'unit-card-container__green',
      button: 'button-container__green',
    },
    {
      title: 'Low Coding',
      content: 'test',
      class: 'unit-card-container__green',
      button: 'button-container__green',
    },
    {
      title: 'Business Analyse',
      content: 'test',
      class: 'unit-card-container__purple',
      button: 'button-container__purple',
    },
    {
      title: 'Oracle',
      content: 'test',
      class: 'unit-card-container__purple',
      button: 'button-container__purple',
    },
    {
      title: 'Cloud',
      content: 'test',
      class: 'unit-card-container__red',
      button: 'button-container__red',
    },
    {
      title: 'Agile',
      content: 'test',
      class: 'unit-card-container__red',
      button: 'button-container__red',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

type Unit = Array<{
  title: string;
  content: string;
  class: string;
  button: string;
}>;
