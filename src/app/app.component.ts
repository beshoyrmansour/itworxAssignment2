import { Component } from '@angular/core';
import { Project } from './shared/models/project';
import { DashboardService } from './shared/services/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedProject: Project;
  isLoading: boolean;
  InitiativesAndProjects: any;

  constructor(private dashboardService: DashboardService) {
    dashboardService.selectedProjectId = 0;
    dashboardService.getProjectInfoById(dashboardService.selectedProjectId).subscribe((project) => {
      this.selectedProject = project;
    });
  }

  ngOnInit() {
    this.dashboardService.selectedProjectId = 0;
    this.dashboardService.getProjectInfoById(this.dashboardService.selectedProjectId).subscribe((project) => {
      this.selectedProject = project;
    });
    this.dashboardService.getInitiativesAndProjects().subscribe((res) => {
      this.InitiativesAndProjects = res;
    })
  }
}
