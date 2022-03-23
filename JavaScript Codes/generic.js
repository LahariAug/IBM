"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var classdemo_1 = require("./classdemo");
function echo(args) {
    return args;
}
// console.log(echo(2));
var myVariable = echo(23);
// class Person{
//     private firstName : string;
// private lastName: string;
// // constructor(){
// //     this.firstName = '';
// //     this.lastName = ' ';
// // }
// constructor(firstName: string ,lastName: string){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// getFullName(){
//     return this.lastName + this.firstName;
// }
// greet(){
//     console.log("saying good morning");
// }
// };
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(classdemo_1.Person));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(classdemo_1.Person));
var admin = new Admin("mon", "day");
var manager = new Manager("good", "morning");
function personEcho(person) {
    return person;
}
var foo = personEcho(admin);
