import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-card',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.scss'],
})
export class UnitCardComponent implements OnInit {
  units: Unit = [
    { title: 'Java', content: 'test', colorId: 1 },
    { title: '.NET', content: 'test', colorId: 1 },
    { title: 'Testing', content: 'test', colorId: 2 },
    { title: 'Low Coding', content: 'test', colorId: 2 },
    { title: 'Business Analyse', content: 'test', colorId: 3 },
    { title: 'Oracle', content: 'test', colorId: 3 },
    { title: 'Cloud', content: 'test', colorId: 4 },
    { title: 'Agile', content: 'test', colorId: 4 },
  ];

  constructor() {}

  ngOnInit(): void {}
}

type Unit = Array<{ title: string; content: string; colorId: number }>;
