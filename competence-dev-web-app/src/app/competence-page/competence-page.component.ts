import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UNITS } from '../mock-units';

@Component({
  selector: 'app-competence',
  templateUrl: './competence-page.component.html',
  styleUrls: ['./competence-page.component.scss'],
})
export class CompetencePageComponent implements OnInit {
  title: string = '';
  dropDownUnitItems: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      this.title = params['unit'];
    });
    this.dropDownUnitItems = UNITS;
  }

  ngOnInit(): void {}

  onBack() {
    this.router.navigate(['/home']);
  }
}
