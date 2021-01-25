import { EnseignatService } from './../../services/enseignat.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from 'src/app/shared/enseignant';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-admin-add-teacher',
  templateUrl: './admin-add-teacher.component.html',
  styleUrls: ['./admin-add-teacher.component.css']
})
export class AdminAddTeacherComponent implements OnInit {

  enseignant : Enseignant = new Enseignant;
  alerte : boolean = false;
 
  constructor(private enseignantService :EnseignatService, private data : SharedDataService,private router: Router) { }

  ngOnInit(): void {
  }
  submit() {
    
    this.enseignantService.createEnseignant(this.enseignant)
      .subscribe(data =>{
        this.data.changeMessage("open alerte");
        this.router.navigateByUrl('admin/home');
        //this.alerte = true;       
      } , error => {
        console.log(error)
      });
  }
  closeAlerte(){
    this.alerte=false;
  }
  

}
