import { User } from "./user";

export class UserResponse{
    user : User;
    accessToken?: string;
	role : string;
}