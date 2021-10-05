import { Component, OnInit } from '@angular/core';

interface Unit {
  id: string;
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  units: Unit[] = [
    { id: 'item1', value: 'java', viewValue: 'Java' },
    { id: 'item2', value: '.net', viewValue: '.NET' },
    { id: 'item3', value: 'testing', viewValue: 'Testing' },
    { id: 'item4', value: 'low coding', viewValue: 'Low Coding' },
    { id: 'item5', value: 'business analyse', viewValue: 'Business Analyse' },
    { id: 'item6', value: 'oracle', viewValue: 'Oracle' },
    { id: 'item7', value: 'cloud', viewValue: 'Cloud' },
    { id: 'item8', value: 'agile', viewValue: 'Agile' },
  ];
}
