import * as request from 'request';
import { Repo } from './Repo';
import { User } from './User';

const  OPTIONS: any = {
    headers:{
     'User-Agent' : 'request'
    },
    json:true
 }
export class GitHubApiService {
    
   
    getUserInfo(userName: string, cb:(user: User) => any ) {

        request.get('https://api.github.com/users/' + userName, OPTIONS, (error:any,response: any,body :any) => {
            // console.log(error);  
        // console.log(response);
         let user = new User(body);
            // console.log(user);
            cb(user);
        })

    }

    getRepo(userName:string,cb:(repo: Repo[]) => any) {
        request.get('https://api.github.com/users/' +userName +'/repos',OPTIONS,(error: any, response: any, body: any)=>{
//map function executs function passed to it for  each element of array 
            let repos =  body.map((repo :any) => new Repo(repo));
            cb(repos);
//             );
        })

    }
}