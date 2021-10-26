import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DROP_DOWN_UNITS } from '../mock-drop-down-units';

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
  @Input() objectArray: any;
  dropDownSelection: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      let unit = params['unit'];

      this.dropDownSelection = unit;
    });
  }

  ngOnInit(): void {}
}
