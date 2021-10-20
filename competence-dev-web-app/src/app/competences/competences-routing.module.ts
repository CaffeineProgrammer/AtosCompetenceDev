import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompetencePageComponent } from './competence-page/competence-page.component';

const routes: Routes = [
  { path: 'competence/:title', component: CompetencePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetencesRoutingModule {}
