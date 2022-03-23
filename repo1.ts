import { repo } from "./repo";
 
export class user
{
    login:string;
    fullname: string;
    repoCount: number;
    followerCount: number;
    repos : repo[];
}