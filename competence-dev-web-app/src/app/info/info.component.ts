import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { COMPETENCES } from '../mock-competences';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  title: string = '';
  presenter: string = '';
  description: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      let currentUnitQueryParam = params['unit'];
      let currentCompetenceQueryParam = params['competence'];

      for (let i = 0; i < COMPETENCES.length; i++) {
        if (COMPETENCES[i].unitName === currentUnitQueryParam) {
          for (let j = 0; j < COMPETENCES[i].competence.length; j++) {
            if (
              COMPETENCES[i].competence[j].name === currentCompetenceQueryParam
            ) {
              this.title = COMPETENCES[i].competence[j].name;
              this.presenter = COMPETENCES[i].competence[j].presenter;
              this.description = COMPETENCES[i].competence[j].content;
            }
          }
        }
      }
    });
  }

  ngOnInit(): void {}
}
