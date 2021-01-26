import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user-service.service';
import { Post } from 'src/app/shared/Posts';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-student-profils',
  templateUrl: './student-profils.component.html',
  styleUrls: ['./student-profils.component.css']
})
export class StudentProfilsComponent implements OnInit {

  constructor(private route: ActivatedRoute , 
              private userService : UserService,
              private postService : PostService) { }

  user : User = new User;
  role : string;
  contactt =0;
  posts : Post[];
  ngOnInit(): void {
    const idUser = this.route.snapshot.params['id'];
    
    this.userService.getUserUserById(idUser).subscribe(data=>{
      this.user = data ;
      console.log(this.user.roles[0].name);
      this.postService.getPostsById(this.user.id).subscribe(data=>this.posts=data)
    })

  

  }
  contact(){
    this.contactt=1;
  }

}
