import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COMPETENCES } from '../mock-competences';

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
  competences: Unit[] = COMPETENCES;

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
