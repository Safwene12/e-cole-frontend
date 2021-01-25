import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { EtudChart } from 'src/app/shared/etudChart';
import { EtudiantService } from 'src/app/services/etudiant.service';
@Component({
  selector: 'app-admin-charts',
  templateUrl: './admin-charts.component.html',
  styleUrls: ['./admin-charts.component.css']
})
export class AdminChartsComponent implements OnInit {

  constructor(private etudiantService : EtudiantService) { }

  ngOnInit(): void {
    this.etudiantService.getInfoChart().subscribe(data=>{
     // data[1].nbreEtud=100;
      this.createChart(data);
    })
  }
  createChart(data ){
    am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      let chart = am4core.create("chartdiv", am4charts.PieChart);
      chart.data = data;
      // Add and configure Series
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "nbreEtud";
      pieSeries.dataFields.category = "section";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeOpacity = 1;

      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;

      chart.hiddenState.properties.radius = am4core.percent(0);
   
  }

}
