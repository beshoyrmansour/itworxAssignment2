import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { MapsComponent } from './maps/maps.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsTableComponent } from './projects-table/projects-table.component';

import { DashboardService } from './shared/services/dashboard.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core/core.module';

import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    MapsComponent,
    ProjectDetailsComponent,
    ProjectsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' }),
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
