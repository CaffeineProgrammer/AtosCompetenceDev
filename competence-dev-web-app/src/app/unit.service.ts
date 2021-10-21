import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Unit } from './unit';
import { UNITS } from './mock-units';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class UnitService {
  constructor(private messageService: MessageService) {}

  getUnits(): Observable<Unit[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(UNITS);
  }

  getUnit(title: string) {
    return this.getUnits().pipe(
      map((units: Unit[]) => units.find((unit) => unit.title === title)!)
    );
  }
}
