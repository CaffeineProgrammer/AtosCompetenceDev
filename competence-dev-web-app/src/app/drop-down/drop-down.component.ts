import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Unit {
  id: string;
  value: string;
  unitName: string;
}

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent implements OnInit {
  dropDownSelection: string = '';
  
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      let unit = params['unit'];

      this.dropDownSelection = unit;
    });
  }

  ngOnInit(): void {}

  units: Unit[] = [
    { id: 'unit1', value: 'java', unitName: 'Java' },
    { id: 'unit2', value: '.net', unitName: '.NET' },
    { id: 'unit3', value: 'testing', unitName: 'Testing' },
    { id: 'unit4', value: 'low coding', unitName: 'Low Coding' },
    { id: 'unit5', value: 'business analyse', unitName: 'Business Analyse' },
    { id: 'unit6', value: 'oracle', unitName: 'Oracle' },
    { id: 'unit7', value: 'cloud', unitName: 'Cloud' },
    { id: 'unit8', value: 'agile', unitName: 'Agile' },
  ];
}
