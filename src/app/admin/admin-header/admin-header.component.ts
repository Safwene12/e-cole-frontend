import { Component, Input, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  
  constructor(private authService : AuthentificationService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout();
  }

}
