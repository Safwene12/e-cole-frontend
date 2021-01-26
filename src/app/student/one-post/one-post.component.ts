
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { PostService } from 'src/app/services/post.service';
import { Comment } from 'src/app/shared/comments';
import { Post } from 'src/app/shared/Posts';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {

  constructor(private route: ActivatedRoute , private postService : PostService,
              private authService : AuthentificationService) { }

  rep = false;
  post : Post = new Post ;
  comment : Comment = new Comment;
  comments : Comment[] = new Array();
  ngOnInit(): void {
    const idPost = this.route.snapshot.params['id'];
    this.postService.getPostById(idPost).subscribe(data=>{this.post=data;
                                  this.postService.getCommentByIdPost(idPost).subscribe(data=>{
                                    this.comments = data;
                                  })})
  }
  reply(){
    this.rep=true;
  }
  onSubmit(){
    this.postService.createComment(this.comment,this.route.snapshot.params['id'],this.authService.currentUserValue.id).subscribe(data=>{
      location.reload();
    })
  }

}
