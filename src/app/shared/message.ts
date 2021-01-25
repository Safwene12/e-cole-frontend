import { User } from "./user";

export class Message {
    id : number;
    objet : string;
    message : string ;
    vu : Boolean;
    trash : Boolean;
    date : Date;
    idUserDest : number;
    idUserEnv : number;
    userDest : User = new User;
    userEnv : User = new User;
}