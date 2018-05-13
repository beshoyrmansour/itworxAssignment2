import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../shared/services/dashboard.service';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.scss']
})
export class ProjectsTableComponent implements OnInit {

  constructor(private dashboardService: DashboardService) {}
  areas:any;
  ngOnInit() {
    this.dashboardService.getAreasInfo(this.dashboardService.selectedProject).subscribe(res => {
      console.log('getAreasInfo',res);
      
      this.areas = res;
    })
  }

}
