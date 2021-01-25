import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { UserService } from 'src/app/services/user-service.service';
import { Etudiant } from 'src/app/shared/student';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.css']
})
export class StudentHeaderComponent implements OnInit {

  constructor(private authService : AuthentificationService , private userService: UserService ) { }
  currentUser :Etudiant = new Etudiant;
  ngOnInit(): void {
    this.userService.getUserById(this.authService.currentUserValue.id).subscribe(data => this.currentUser=data);
  }
  logout(){
    this.authService.logout();
  }

}
