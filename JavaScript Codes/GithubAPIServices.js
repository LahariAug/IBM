"use strict";
exports.__esModule = true;
exports.GitHubApiService = void 0;
var request = require("request");
var Repo_1 = require("./Repo");
var User_1 = require("./User");
var OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var GitHubApiService = /** @class */ (function () {
    function GitHubApiService() {
    }
    GitHubApiService.prototype.getUserInfo = function (userName, cb) {
        request.get('https://api.github.com/users/' + userName, OPTIONS, function (error, response, body) {
            // console.log(error);  
            // console.log(response);
            var user = new User_1.User(body);
            // console.log(user);
            cb(user);
        });
    };
    GitHubApiService.prototype.getRepo = function (userName, cb) {
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, function (error, response, body) {
            //map function executs function passed to it for  each element of array 
            var repos = body.map(function (repo) { return new Repo_1.Repo(repo); });
            cb(repos);
            //             );
        });
    };
    return GitHubApiService;
}());
exports.GitHubApiService = GitHubApiService;
