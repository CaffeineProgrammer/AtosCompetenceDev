import { Component, OnInit } from '@angular/core';
import { DROP_DOWN_UNITS } from '../mock-drop-down-units';

@Component({
  selector: 'app-competence',
  templateUrl: './competence-page.component.html',
  styleUrls: ['./competence-page.component.scss'],
})
export class CompetencePageComponent implements OnInit {
  dropDownUnitItems: any;

  constructor() {
    this.dropDownUnitItems = DROP_DOWN_UNITS;
  }

  ngOnInit(): void {}
}
