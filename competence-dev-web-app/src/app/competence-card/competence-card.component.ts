import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Interface } from 'readline';

interface Unit {
  unitName: string;
  competence: Competence[];
}

interface Competence {
  competenceName: string;
  presenter: string;
  content: string;
}

@Component({
  selector: 'app-competence-card',
  templateUrl: './competence-card.component.html',
  styleUrls: ['./competence-card.component.scss'],
})
export class CompetenceCardComponent implements OnInit {
  competences: Unit[] = [
    {
      unitName: 'Java',
      competence: [
        {
          competenceName: 'Cloud computing',
          presenter: 'Frits',
          content: 'test',
        },
        {
          competenceName: 'Cloud startup',
          presenter: 'Frits',
          content: 'test',
        },
        { competenceName: 'Cloud', presenter: 'Mark', content: 'test' },
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      let unit = params['unit'];
      console.log(unit);
    });
  }

  ngOnInit(): void {}
}

// type Competence = Array<{ title: string; presenter: string; content: string }>;
