import { Component, OnInit } from '@angular/core';

interface Competence {
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

  competences: Competence[] = [
    { value: 'java', viewValue: 'Java' },
    { value: '.net', viewValue: '.NET' },
    { value: 'testing', viewValue: 'Testing' },
    { value: 'low coding', viewValue: 'Low Coding' },
    { value: 'business analyse', viewValue: 'Business Analyse' },
    { value: 'oracle', viewValue: 'Oracle' },
    { value: 'cloud', viewValue: 'Cloud' },
    { value: 'agile', viewValue: 'Agile' },
  ];
}
