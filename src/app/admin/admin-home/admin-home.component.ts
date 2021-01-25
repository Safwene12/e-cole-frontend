import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { EnseignatService } from 'src/app/services/enseignat.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { GroupeService } from 'src/app/services/groupe.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { SpecialiteService } from 'src/app/services/specialite.service';
import { Enseignant } from 'src/app/shared/enseignant';
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
this.enseignantService.getNbreEnsei().subscribe(data=> this.nbreEnseignants=data);
this.etudiantService.getNbreEtudiants().subscribe(data=> this.nbreEtudiants=data);
this.groupeService.getNbreGroupes().subscribe(data=> this.nbreGroupe=data);
this.specService.getNbreSpec().subscribe(data=> this.nbreSpecialite=data);
this.enseignantService.getAll().subscribe(data=> this.enseignants=data);
}

closeA(){
this.data.changeMessage("close");
}


}
