import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { MessageService } from 'src/app/services/message.service';
import { Message } from 'src/app/shared/message';

@Component({
  selector: 'app-student-sent-messages',
  templateUrl: './student-sent-messages.component.html',
  styleUrls: ['./student-sent-messages.component.css']
})
export class StudentSentMessagesComponent implements OnInit {

  messages : Message[];
  constructor(private authService : AuthentificationService,
              private messageService : MessageService) { }

  ngOnInit(): void {
    this.messageService.getMessageSend(this.authService.currentUserValue.id).subscribe(data=>{
      this.messages=data;
      console.log(((this.messages[1].date.toString()).split("T")[0]).split("-")[2]);
    })
  }

}
