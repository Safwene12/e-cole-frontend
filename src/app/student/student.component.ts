import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private authService : AuthentificationService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout();
  }

}
