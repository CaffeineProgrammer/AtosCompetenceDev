import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { COMPETENCES } from '../mock-competences';

@Component({
  selector: 'app-infopage',
  templateUrl: './infopage.component.html',
  styleUrls: ['./infopage.component.scss'],
})
export class InfopageComponent implements OnInit {
  dropDownCompetenceItems: any;
  currentQueryParam: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      this.currentQueryParam = params['unit'];

      for (let i = 0; i < COMPETENCES.length; i++) {
        if (COMPETENCES[i].unitName === this.currentQueryParam) {
          this.dropDownCompetenceItems = COMPETENCES[i].competence;
        }
      }
    });
  }

  ngOnInit(): void {}

  onBack() {
    this.router.navigate(['/competence'], {
      queryParams: { unit: this.currentQueryParam },
    });
  }
}
