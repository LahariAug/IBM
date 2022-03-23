"use strict";
exports.__esModule = true;
exports.repo = void 0;
var repo = /** @class */ (function () {
    function repo(repo) {
        this.name = repo.name;
        this.description = repo.description;
        this.url = repo.html_url;
        this.size = repo.size;
        this.forkCount = repo.forks_count;
    }
    return repo;
}());
exports.repo = repo;
