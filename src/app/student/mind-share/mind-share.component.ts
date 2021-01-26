import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user-service.service';
import { Post } from 'src/app/shared/Posts';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-mind-share',
  templateUrl: './mind-share.component.html',
  styleUrls: ['./mind-share.component.css']
})
export class MindShareComponent implements OnInit {

  constructor(private authService : AuthentificationService ,
              private userService : UserService,
              private postService : PostService,
              private router : Router) { }
  user : User;
  post : Post = new Post;
  data : Post[] ;
  posts : Post[] = new Array() ;
  ngOnInit(): void {
    this.userService.getUserUserById(this.authService.currentUserValue.id).subscribe(data=>{
                        this.user=data;
                        this.postService.getPosts().subscribe(data=>{
                          this.data=data;
                          this.data.forEach(e=>{
                            if(e.userPo.groupe.id==this.user.groupe.id)
                            {
                              this.posts.push(e);
                            }
                          })
                          console.log(this.posts)
                          console.log(this.data)
                        })
                        })
    
  }
  onClich(){
    this.postService.createPost(this.post,this.authService.currentUserValue.id).subscribe(data=>{
      location.reload();
    })
  }

}
