import { Observable, of } from 'rxjs';

import { Competence } from './competence';
import { COMPETENCES } from './mock-competences';

export class CompetenceService {
  constructor() {}

  getCompetences(): Observable<Competence[]> {
    return of(COMPETENCES);
  }

  getCompetence(id: number | string) {

  }
}
