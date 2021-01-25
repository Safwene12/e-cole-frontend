import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user-service.service';
import { Message } from 'src/app/shared/message';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-student-new-email',
  templateUrl: './student-new-email.component.html',
  styleUrls: ['./student-new-email.component.css']
})
export class StudentNewEmailComponent implements OnInit {

  constructor(private userService : UserService ,
              private messageService : MessageService ,
              private router : Router , 
              private authService : AuthentificationService) { }
  users : User[] ;
  message : Message = new Message;
  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data=>this.users=data);
  }
  changeIdDest(s){
    this.message.idUserDest = s.target.value;
 }
  onClick(){
    this.message.idUserEnv = this.authService.currentUserValue.id;
    this.messageService.createMessage(this.message).subscribe(data=>{
      this.router.navigateByUrl("/student/messagerie/sent");
    })
  }


}
