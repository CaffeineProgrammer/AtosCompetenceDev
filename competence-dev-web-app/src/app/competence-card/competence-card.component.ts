import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { COMPETENCES } from '../mock-competences';

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
  competences: Competence[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.getCompetencesFromList();
  }

  ngOnInit(): void {}

  getCompetencesFromList() {
    this.route.queryParams.subscribe((params) => {
      let unit = params['unit'];

      for (let i = 0; i < COMPETENCES.length; i++) {
        if (COMPETENCES[i].unitName === unit) {
          COMPETENCES[i].competence.forEach((obj) =>
            this.competences.push(obj)
          );
        }
      }
    });
  }

  onVisitCompetence(competenceName: string) {
    this.router.navigate(['/infopage'], {
      queryParams: { competence: competenceName },
      queryParamsHandling: 'merge',
    });
  }
}
