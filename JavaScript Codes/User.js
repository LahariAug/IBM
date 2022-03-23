"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userResponse) {
        this.login = userResponse.login;
        this.fullname = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        // this.repos? ; // optional 
    }
    return User;
}());
exports.User = User;
