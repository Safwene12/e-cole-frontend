import { Post } from "./Posts";
import { User } from "./user";

export class Comment{
    Id : number;
    commentaire : String;
    posts : Post;
    userCom : User;
    date : Date;
    
}