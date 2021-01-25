import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatiereService } from 'src/app/services/matiere.service';
import { SectionService } from 'src/app/services/section.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Matiere } from 'src/app/shared/matiere';
import { Section } from 'src/app/shared/section';

@Component({
  selector: 'app-admin-add-subject',
  templateUrl: './admin-add-subject.component.html',
  styleUrls: ['./admin-add-subject.component.css']
})
export class AdminAddSubjectComponent implements OnInit {

  matiere : Matiere = new Matiere;
  constructor(private matiereService : MatiereService ,private sectionService : SectionService , private data : SharedDataService , private router: Router) { }
  sections : Section[];

  
  submit() {
    
    this.matiereService.createSpecialite(this.matiere)
      .subscribe(data =>{
        this.data.changeMessage("open alerte");
        this.router.navigateByUrl("admin/home");
        //this.alerte = true;       
      } , error => {
        console.log(error)
      });
  }
  ngOnInit(): void {
    this.sectionService.getSections().subscribe(data =>this.sections=data);
  }


}
