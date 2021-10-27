import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
      let competence = params['competence'];

      if (competence) {
        this.dropDownSelection = competence;
      } else {
        this.dropDownSelection = unit;
      }
    });
  }

  ngOnInit(): void {}
}
