import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { MessageService } from 'src/app/services/message.service';
import { Message } from 'src/app/shared/message';

@Component({
  selector: 'app-student-messagerie',
  templateUrl: './student-messagerie.component.html',
  styleUrls: ['./student-messagerie.component.css']
})
export class StudentMessagerieComponent implements OnInit {

  constructor(private messageSer : MessageService,
              private authSer : AuthentificationService) { }
  span : number
  ngOnInit(): void {
    this.messageSer.getSpan(this.authSer.currentUserValue.id).subscribe(data=>this.span=data)
  }

}
