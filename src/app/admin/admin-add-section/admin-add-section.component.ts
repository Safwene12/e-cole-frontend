import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SectionService } from 'src/app/services/section.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { SpecialiteService } from 'src/app/services/specialite.service';
import { Section } from 'src/app/shared/section';
import { Specialite } from 'src/app/shared/specialite';

@Component({
  selector: 'app-admin-add-section',
  templateUrl: './admin-add-section.component.html',
  styleUrls: ['./admin-add-section.component.css']
})
export class AdminAddSectionComponent implements OnInit {

  section : Section = new Section;
  specialities : Specialite[]; 
  constructor(private specialiteService : SpecialiteService , private sectionService : SectionService,
    private data : SharedDataService , private router: Router) { }

  ngOnInit(): void {
    this.specialiteService.getSpeciality().subscribe(data =>this.specialities=data);
  }
  submit() {
    
    this.sectionService.createSection(this.section)
      .subscribe(data =>{
        this.data.changeMessage("open alerte");
        this.router.navigateByUrl("admin/home");
        //this.alerte = true;       
      } , error => {
        console.log(error)
      });
  }


}
