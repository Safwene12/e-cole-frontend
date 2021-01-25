import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { GroupeService } from 'src/app/services/groupe.service';
import { SectionService } from 'src/app/services/section.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Groupe } from 'src/app/shared/groupe';
import { Section } from 'src/app/shared/section';
import { Etudiant } from 'src/app/shared/student';

@Component({
  selector: 'app-admin-add-student',
  templateUrl: './admin-add-student.component.html',
  styleUrls: ['./admin-add-student.component.css']
})
export class AdminAddStudentComponent implements OnInit {

  size : number;
  etudiant : Etudiant = new Etudiant;
  sections : Section[];
  groupes : Groupe[];
  groupe : Groupe = new Groupe;
  constructor(private sectionService : SectionService , 
              private groupeService : GroupeService ,
              private etudiantService : EtudiantService,
              private data : SharedDataService , 
              private router: Router) { }

  ngOnInit(): void {  
    this.sectionService.getSections().subscribe(data=>this.sections=data);
  }
  submit(){
 
    this.etudiantService.createEtud(this.etudiant ,this.groupe.id)
      .subscribe(data =>{
        this.data.changeMessage("open alerte");
        this.router.navigateByUrl('admin/home');
        //this.alerte = true;       
      } , error => {
        console.log(error)
      });
  }
  generateGroup(id){
    this.groupeService.getGroupBySec(id.target.value).subscribe(data=>{
      this.groupes=data;
      this.size= this.groupes.length;
    });
  }


}
