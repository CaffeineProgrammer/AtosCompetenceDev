import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { COMPETENCES } from '../mock-competences';

interface Unit {
  unitName: string;
  competence: Competence[];
}

interface Competence {
  name: string;
  host: string;
  content: string;
  class: string;
}

@Component({
  selector: 'app-competence-card',
  templateUrl: './competence-card.component.html',
  styleUrls: ['./competence-card.component.scss'],
})
export class CompetenceCardComponent implements OnInit {
  allCompetences: Unit[] = COMPETENCES;
  competences: Competence[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      let unit = params['unit'];

      for (let i = 0; i < this.allCompetences.length; i++) {
        if (this.allCompetences[i].unitName === unit) {
          this.allCompetences[i].competence.forEach((obj) =>
            this.competences.push(Object.assign({}, obj))
          );
        }
      }
    });
  }

  ngOnInit(): void {}

  onVisitCompetence(competenceName: string) {
    this.router.navigate(['/infopage'], {
      queryParams: { competence: competenceName },
      queryParamsHandling: 'merge',
    });
  }
}

// type Competence = Array<{ title: string; presenter: string; content: string }>;
