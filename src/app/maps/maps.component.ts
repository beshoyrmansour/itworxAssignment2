import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/models/project';
import { AreaMap } from '../shared/models/area-map';
import { DashboardService } from '../shared/services/dashboard.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {


  constructor(private dashboardService: DashboardService) {

  }
  areas: Array<AreaMap>;
  ngOnInit() {
    this.areasMapData();
  }
  areasMapData() {
    this.areas = Array<AreaMap>();
    if (!this.dashboardService.selectedProject) {
      this.dashboardService.getProjectInfoById(this.dashboardService.selectedProjectId)
        .subscribe((project) => {
          this.getAllMapsInfo(project)
        });
    } else {      
      this.getAllMapsInfo(this.dashboardService.selectedProject)
    }
  }
  getAllMapsInfo(project: Project) {
    this.dashboardService.getAllMapsInfo(project)
      .subscribe((res) => {
        this.areas = this.dashboardService.areasMap
      })
  }
}
