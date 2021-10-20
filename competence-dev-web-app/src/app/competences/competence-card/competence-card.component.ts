import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CompetenceService } from '../competence.service';
import { Competence } from '../competence';

@Component({
  selector: 'app-competence-card',
  templateUrl: './competence-card.component.html',
  styleUrls: ['./competence-card.component.scss'],
})
export class CompetenceCardComponent implements OnInit {
  competences$!: Observable<Competence[]>;
  selectedId = 0;

  @Input() unitCategory: any;

  // competences: Competence = [
  //   { title: 'Cloud computing', presenter: 'Frits', content: 'test' },
  //   { title: 'Cloud startup', presenter: 'Frits', content: 'test' },
  //   { title: 'Cloud', presenter: 'Mark', content: 'test' },
  //   { title: 'Cloud', presenter: 'Mark', content: 'test' },
  //   { title: 'Cloud', presenter: 'Mark', content: 'test' },
  // ];

  constructor(
    private service: CompetenceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.competences$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getCompetences();
      })
    );
  }
}

// type Competence = Array<{ title: string; presenter: string; content: string }>;
