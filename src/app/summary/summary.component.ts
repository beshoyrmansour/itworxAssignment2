import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() name: string;
  @Input() owner: string;
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() oldActual: number;
  @Input() achieved: number;
  @Input() currentTarget: number;
  @Input() nextTarget: number;
  @Input() InitiativesAndProjects: any;
  chart: Chart;

  constructor() { }

  ngOnInit() {
    this.chart = new Chart();
    this.chart.options.chart = {
      type: 'gauge',
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false
    };
    this.chart.options.title = {
      text: 'Speedometer'
    };

    this.chart.options.pane = {
      startAngle: -120,
      endAngle: 120,
      background: []
    };

    this.chart.addPoint(1)
    this.chart.addPoint(3)
    this.chart.addPoint(6)
    // this.chart.options.yAxis= {
    //   min: 0.00,
    //   max: 6.00,
  
    //   minorTickInterval: 'auto',
    //   minorTickWidth: 1,
    //   minorTickLength: 10,
    //   minorTickPosition: 'outside',
    //   minorTickColor: '#000',
  
    //   tickPixelInterval: 30,
    //   tickWidth: 2,
    //   tickPosition: 'inside',
    //   tickLength: 10,
    //   tickColor: '#',
    //   labels: {
    //     step: 2,
    //     rotation: 'auto'
    //   },
    //   title: {
    //     text: 'km/h'
    //   },
    //   plotBands: [{
    //     from: 0,
    //     to: 2,
    //     color: '#55BF3B' // green
    //   }, {
    //     from: 2,
    //     to: 4.5,
    //     color: '#DDDF0D' // yellow
    //   }, {
    //     from: 4.5,
    //     to: 6.0,
    //     color: '#DF5353' // red
    //   }]
    // },
  

    this.chart.options.title = {
      text: 'km/h'
    };
    this.chart.options.pane = {
      startAngle: -120,
      endAngle: 120,
      background: []
    };

  }
}
