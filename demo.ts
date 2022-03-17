class Person{
firstName : string;
lastName: string;

// constructor(){
//     this.firstName = '';
//     this.lastName = ' ';
// }
constructor(firstName: string ,lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
}
getFullName(){
    return this.lastName + this.firstName;
}

};
var objectPerson = new Person("captain","america");
// objectPerson.firstName = "hulk";
console.log(objectPerson.firstName);
console.log(objectPerson.lastName);
var fullName = objectPerson.getFullName();
console.log(fullName);