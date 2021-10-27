import { Component, OnInit } from '@angular/core';
import { UNITS } from '../mock-units';

@Component({
  selector: 'app-competence',
  templateUrl: './competence-page.component.html',
  styleUrls: ['./competence-page.component.scss'],
})
export class CompetencePageComponent implements OnInit {
  dropDownUnitItems: any;

  constructor() {
    this.dropDownUnitItems = UNITS;
  }

  ngOnInit(): void {}
}
