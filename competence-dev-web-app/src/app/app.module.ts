import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { CompetencePageComponent } from './competences/competence-page/competence-page.component';
import { CompetenceCardComponent } from './competences/competence-card/competence-card.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnitCardComponent } from './unit-card/unit-card.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { InfopageComponent } from './infopage/infopage.component';
import { InfoComponent } from './info/info.component';

import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CompetencesModule } from './competences/competences.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompetencePageComponent,
    CompetenceCardComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    UnitCardComponent,
    DropDownComponent,
    InfopageComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatCardModule,
    FlexLayoutModule,
    CompetencesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
