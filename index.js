"use strict";
exports.__esModule = true;
var GitHubApiService_1 = require("./GitHubApiService");
console.log("hello");
var abc = new GitHubApiService_1.GitHubApiService();
abc.getUserInfo('koushikkothagal', function (user) {
    console.log(user);
});
abc.getRepo('koushikkothagal', function (repo) {
    console.log(repo);
});
//API -> to retrieve some information from anyonline service. 
