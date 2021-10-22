import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  competence: Competence[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      let unit = params['unit'];

      for (let i = 0; i < this.competences.length; i++) {
        if (this.competences[i].unitName === unit) {
          this.competences[i].competence.forEach((obj) =>
            this.competence.push(Object.assign({}, obj))
          );
        }
      }

      console.log(this.competence);
    });
  }

  ngOnInit(): void {}
}

// type Competence = Array<{ title: string; presenter: string; content: string }>;
