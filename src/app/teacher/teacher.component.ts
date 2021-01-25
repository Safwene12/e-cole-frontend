import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private authService : AuthentificationService) { }

  ngOnInit(): void {
    
  }
  logout(){
    this.authService.logout();
  }
}
