import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencePageComponent } from './competence-page.component';

describe('CompetencePageComponent', () => {
  let component: CompetencePageComponent;
  let fixture: ComponentFixture<CompetencePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetencePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
