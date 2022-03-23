var Person = /** @class */ (function () {
    // constructor(){
    //     this.firstName = '';
    //     this.lastName = ' ';
    // }
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.lastName + this.firstName;
    };
    return Person;
}());
;
var objectPerson = new Person("captain", "america");
// objectPerson.firstName = "hulk";
console.log(objectPerson.firstName);
console.log(objectPerson.lastName);
var fullName = objectPerson.getFullName();
console.log(fullName);
