import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UNITS } from '../mock-units';

@Component({
  selector: 'app-competence',
  templateUrl: './competence-page.component.html',
  styleUrls: ['./competence-page.component.scss'],
})
export class CompetencePageComponent implements OnInit {
  dropDownUnitItems: any;

  constructor(private router: Router) {
    this.dropDownUnitItems = UNITS;
  }

  ngOnInit(): void {}

  onBack() {
    this.router.navigate(['/home']);
  }
}
