import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { COMPETENCES } from '../mock-competences';

@Component({
  selector: 'app-infopage',
  templateUrl: './infopage.component.html',
  styleUrls: ['./infopage.component.scss'],
})
export class InfopageComponent implements OnInit {
  dropDownCompetenceItems: any;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      let unit = params['unit'];

      for (let i = 0; i < COMPETENCES.length; i++) {
        if (COMPETENCES[i].unitName === unit) {
          this.dropDownCompetenceItems = COMPETENCES[i].competence;
        }
      }
    });
  }

  ngOnInit(): void {}
}
