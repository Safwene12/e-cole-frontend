import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrls: ['./student-sidebar.component.css']
})
export class StudentSidebarComponent implements OnInit {

  constructor(private messageSer : MessageService,
    private authSer : AuthentificationService) { }
span : number
ngOnInit(): void {
this.messageSer.getSpan(this.authSer.currentUserValue.id).subscribe(data=>this.span=data)
}

}
