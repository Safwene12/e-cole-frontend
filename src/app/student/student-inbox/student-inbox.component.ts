import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { MessageService } from 'src/app/services/message.service';
import { Message } from 'src/app/shared/message';

@Component({
  selector: 'app-student-inbox',
  templateUrl: './student-inbox.component.html',
  styleUrls: ['./student-inbox.component.css']
})
export class StudentInboxComponent implements OnInit {

  constructor(private authService : AuthentificationService,
              private messageService : MessageService) { }

  inbox : Message[];
  ngOnInit(): void {
    this.messageService.getInboc(this.authService.currentUserValue.id).subscribe(data=>{
      this.inbox=data;
    })
  }

}
