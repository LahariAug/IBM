interface PersonInterface {
    firstName: string;
    lastName: string;
    getFullName(): string;
}

class Foo implements PersonInterface {
    firstName: string;
    lastName: string;
    getFullName(): string {
        return  this.firstName + this.lastName;
    }

}
 let aPerson:PersonInterface = new Foo();
//  aPerson = "test";
 // implements interface. so an instance of class foo can be allocated
//  to a variable, that's declared of that instance
// --------------------INTERFACE------------------
//duck typing

let someObj ={
    // firstName: 'text',
    lastName: "text",
    middleName: "text",
    getFullName: () => "test"
};
aPerson = someObj;
// for duck typig ->property must be exactly matching
// aPerson.middlename -> not possible