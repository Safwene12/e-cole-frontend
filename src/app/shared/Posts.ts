import { Comment } from "./comments";
import { User } from "./user";

export class Post{
    Id : number ;
    post : string;
    comments : Comment[];
    userPo : User = new User;
    date : Date;
}