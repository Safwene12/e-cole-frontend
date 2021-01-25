import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { SpecialiteService } from 'src/app/services/specialite.service';
import { Specialite } from 'src/app/shared/specialite';


@Component({
  selector: 'app-admin-add-speciality',
  templateUrl: './admin-add-speciality.component.html',
  styleUrls: ['./admin-add-speciality.component.css']
})
export class AdminAddSpecialityComponent implements OnInit {

  speciality : Specialite = new Specialite;
  currentRoute = this.router.url;
  constructor(private specialiteService :SpecialiteService, private data : SharedDataService , private router: Router) { }
  submit() {
    
    this.specialiteService.createSpecialite(this.speciality)
      .subscribe(data =>{
        this.data.changeMessage("open alerte");
        this.router.navigateByUrl("admin/home");
        
        //this.alerte = true;       
      } , error => {
        console.log(error)
      });
  }

  ngOnInit(): void {
  }


}
