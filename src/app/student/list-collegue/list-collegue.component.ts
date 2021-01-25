import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { GroupeService } from 'src/app/services/groupe.service';
import { UserService } from 'src/app/services/user-service.service';
import { Etudiant } from 'src/app/shared/student';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-list-collegue',
  templateUrl: './list-collegue.component.html',
  styleUrls: ['./list-collegue.component.css']
})
export class ListCollegueComponent implements OnInit {

  constructor(private groupeService : GroupeService,
              private authService : AuthentificationService,
              private userService : UserService) { }

  user : Etudiant = new Etudiant;  
  etudiant: Etudiant[] ;     
  remove : number;    
  idUser : number;
  ngOnInit(): void {
    this.idUser = this.authService.currentUserValue.id;
    this.userService.getUserById(this.idUser).subscribe(data=>{
      this.user=data ;
      this.groupeService.getClassmates(this.user.groupe.id).subscribe(data=>{
        this.etudiant=data; 

      });
    })
  }

}
