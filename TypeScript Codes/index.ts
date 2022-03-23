import {GitHubApiService} from './GitHubApiService';
import { Repo } from './Repo';
import { User } from './User';

console.log("hello");
let abc = new GitHubApiService();
abc.getUserInfo('koushikkothagal',(user: User) =>{
    console.log(user);
});

abc.getRepo('koushikkothagal',(repo : Repo[]) =>{
    console.log(repo);
}    );

//API -> to retrieve some information from anyonline service. 