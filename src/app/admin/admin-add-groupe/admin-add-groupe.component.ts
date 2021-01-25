import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Matiere } from 'src/app/shared/matiere';
import { Groupe } from 'src/app/shared/groupe';
import { Section } from 'src/app/shared/section';
import { SectionService } from 'src/app/services/section.service';
import { MatiereService } from 'src/app/services/matiere.service';
import { EnseignatService } from 'src/app/services/enseignat.service';
import { Enseignant } from 'src/app/shared/enseignant';
import { EnseiMatiere } from 'src/app/shared/enseigMatiere';
import { GroupeService } from 'src/app/services/groupe.service';
import { PostGroupe } from 'src/app/shared/postGroupe';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-add-groupe',
  templateUrl: './admin-add-groupe.component.html',
  styleUrls: ['./admin-add-groupe.component.css']
})
export class AdminAddGroupeComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  groupe : Groupe = new Groupe;
  sections : Section[];
  matieres: Matiere[] ;
  enseignants: Enseignant[];
  enseigMatiere : EnseiMatiere[] = [];
  idGroupe = -1;
  enseignant : Enseignant;
  ens =[];
  postObject : PostGroupe= new PostGroupe;
  
  
   
  constructor(private _formBuilder: FormBuilder , 
    private sectionService : SectionService , 
    private matiereService : MatiereService,
    private enseignantService : EnseignatService ,
    private groupeService : GroupeService,
    private data : SharedDataService , 
    private router: Router) { }

  ngOnInit(): void {
    this.sectionService.getSections().subscribe(data =>this.sections=data);
    this.firstFormGroup = this._formBuilder.group({
      nomGroupe: ['', Validators.required],
      anneeScollaire: ['', Validators.required],
      section: ['' , Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      amount: ['', Validators.required],
      stock: ['', Validators.required],
      ensei:['']
    });
  }
  submit(){
    this.affect();
    this.postObject.affects=this.enseigMatiere;
    this.postObject.groupe=this.groupe;
    this.groupeService.createGroupe(this.postObject).subscribe(data =>{
      this.data.changeMessage("open alerte");
      this.router.navigateByUrl("admin/home");
   
    })
    console.log(this.postObject);


  }
  mats() 
  {
    this.matiereService.getMatieresByIdSection(this.groupe.sectionId).subscribe(data =>{
      this.matieres=data;  
      
      data.forEach(x=>{
        this.ens.push(x);
      })
    });
    this.enseignantService.getAll().subscribe(data=>this.enseignants=data);  

  }

  affect(){
    for(let i=0;i<this.matieres.length;i++)
    {
      let enseigMat : EnseiMatiere = new EnseiMatiere;
      enseigMat.idEns = this.ens[i];
      enseigMat.idMat=this.matieres[i].id;
      this.enseigMatiere.push(enseigMat);
    }
    console.log(this.enseigMatiere)
    
  }
  addToEnseigs(s,num){
    this.ens[num] = s.target.value;
 }
 
  



}
