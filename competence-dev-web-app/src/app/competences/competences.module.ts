import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetencePageComponent } from './competence-page/competence-page.component';
import { CompetenceCardComponent } from './competence-card/competence-card.component';
import { DropDownComponent } from '../drop-down/drop-down.component';

import { CompetencesRoutingModule } from './competences-routing.module';

@NgModule({
  declarations: [
    CompetencePageComponent, 
    CompetenceCardComponent,
    DropDownComponent,
  ],
  imports: [
    CommonModule, 
    CompetencesRoutingModule, 
    CompetencesRoutingModule
  ],
})
export class CompetencesModule {}
