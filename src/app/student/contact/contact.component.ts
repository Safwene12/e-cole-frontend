import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user-service.service';
import { Enseignant } from 'src/app/shared/enseignant';
import { Message } from 'src/app/shared/message';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private userService : UserService ,
    private messageService : MessageService ,
    private router : Router , 
    private authService : AuthentificationService,
    private route: ActivatedRoute) { }
users : User[] ;
message : Message = new Message;
user : User = new User;
ngOnInit(): void {
  const idUser = this.route.snapshot.params['id'];
  this.message.idUserDest = idUser;
  this.userService.getUserUserById(idUser).subscribe(data=>this.user=data);

}

onClick(){
this.message.idUserEnv = this.authService.currentUserValue.id;
this.messageService.createMessage(this.message).subscribe(data=>{
this.router.navigateByUrl("/student/messagerie/sent");
})
}

}
