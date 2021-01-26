import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseURL';
import { Comment } from '../shared/comments';
import { Post } from '../shared/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  createPost(post : Post , id : number): Observable<Object> {
    return this.http.post(baseURL + 'addPost/'+id, post);
  }
  getPostsById(id : number) : Observable<Post[]>
  {
    return this.http.get<Post[]>(baseURL+"posts/"+id);
  }
  getPosts() : Observable<Post[]>
  {
    return this.http.get<Post[]>(baseURL+"posts/");
  }
  getPostById(id : number) : Observable<Post>
  {
    return this.http.get<Post>(baseURL+"getPost/"+id);
  }
  createComment(coment : Comment , idPost : number,idUser : number): Observable<Object> {
    return this.http.post(baseURL + 'addComment/'+idPost+"/"+idUser, coment);
  }
  getCommentByIdPost(id : number) : Observable<Comment[]>
  {
    return this.http.get<Comment[]>(baseURL+"comments/"+id);
  }
}
