import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { GroupeService } from 'src/app/services/groupe.service';
import { UserService } from 'src/app/services/user-service.service';
import { EnseiMat } from 'src/app/shared/enseigMat';
import { Etudiant } from 'src/app/shared/student';

@Component({
  selector: 'app-list-enseignants',
  templateUrl: './list-enseignants.component.html',
  styleUrls: ['./list-enseignants.component.css']
})
export class ListEnseignantsComponent implements OnInit {

  constructor(private authService : AuthentificationService , 
              private userService : UserService ,
              private groupeService : GroupeService) { }
    user : Etudiant = new Etudiant;
    affects : EnseiMat[];
    ngOnInit(): void {
    this.userService.getUserById(this.authService.currentUserValue.id).subscribe(data=>{
                this.user=data;
                console.log(this.user.id)
                this.groupeService.getAffects(this.user.groupe.id).subscribe(data=>this.affects=data);})

    
    }

}
