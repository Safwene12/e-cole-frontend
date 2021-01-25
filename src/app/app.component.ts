import { Component } from '@angular/core';
import { AuthentificationService } from './services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecole-frontend';
  constructor(private authService : AuthentificationService ){}
  isAuth : boolean;
  role : string;
  ngOnInit(): void {
    
    if(this.authService.currentUserValue!=null)
    {
      this.role = this.authService.currentUserValue.authorities[0];
    }
    this.isAuth = this.authService.isAuthorized();
   
  }
}
