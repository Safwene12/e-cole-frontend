import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { Message } from 'src/app/shared/message';

@Component({
  selector: 'app-read-email',
  templateUrl: './read-email.component.html',
  styleUrls: ['./read-email.component.css']
})
export class ReadEmailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private messageService : MessageService) { }

  message : Message = new Message;
  ngOnInit(): void {
    const idMessage = this.route.snapshot.params['id'];
    
    this.messageService.getMessageById(idMessage).subscribe(data=>this.message=data);
    
    this.messageService.setVu(idMessage).subscribe(data=>{})
  }

}
