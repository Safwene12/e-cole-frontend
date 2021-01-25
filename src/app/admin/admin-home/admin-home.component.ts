import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { EnseignatService } from 'src/app/services/enseignat.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { GroupeService } from 'src/app/services/groupe.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { SpecialiteService } from 'src/app/services/specialite.service';
import { Enseignant } from 'src/app/shared/enseignant';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { EtudChart } from 'src/app/shared/etudChart';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private data : SharedDataService ,
    private etudiantService : EtudiantService,
    private enseignantService : EnseignatService,
    private specService : SpecialiteService,
    private groupeService : GroupeService,
    private authService : AuthentificationService ) { }
alerte:any;
nbreEtudiants = 0;
nbreEnseignants = 0;
nbreGroupe = 0 ;
nbreSpecialite = 0;
enseignants : Enseignant[];


ngOnInit(): void {

this.data.currentMessage.subscribe(message => 
(this.alerte= message)); //<= Always get current value!
this.enseignantService.getNbreEnsei().subscribe(data=> {this.nbreEnseignants=data
                                                        console.log(this.nbreEnseignants)} );
this.etudiantService.getNbreEtudiants().subscribe(data=> {
                                                  this.nbreEtudiants=data;
                                                  console.log(this.nbreEtudiants)});
this.groupeService.getNbreGroupes().subscribe(data=> this.nbreGroupe=data);
this.specService.getNbreSpec().subscribe(data=> this.nbreSpecialite=data);
this.enseignantService.getAll().subscribe(data=> this.enseignants=data);
this.etudiantService.getInfoChart().subscribe(data=>{
  // data[1].nbreEtud=100;
   this.createChart(data);
 })
}

closeA(){
this.data.changeMessage("close");
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
    pieSeries.dataFields.category = "spec";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);
 
}




}
