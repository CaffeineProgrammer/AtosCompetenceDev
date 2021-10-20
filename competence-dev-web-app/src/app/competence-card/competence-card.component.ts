import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-competence-card',
  templateUrl: './competence-card.component.html',
  styleUrls: ['./competence-card.component.scss'],
})
export class CompetenceCardComponent implements OnInit {
  @Input() unitCategory: any;

  competences: Competence = [
    { title: 'Cloud computing', presenter: 'Frits', content: 'test' },
    { title: 'Cloud startup', presenter: 'Frits', content: 'test' },
    { title: 'Cloud', presenter: 'Mark', content: 'test' },
    { title: 'Cloud', presenter: 'Mark', content: 'test' },
    { title: 'Cloud', presenter: 'Mark', content: 'test' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

type Competence = Array<{ title: string; presenter: string; content: string }>;
