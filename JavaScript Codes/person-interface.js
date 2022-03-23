var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    return Foo;
}());
var aPerson = new Foo();
//  aPerson = "test";
// implements interface. so an instance of class foo can be allocated
//  to a variable, that's declared of that instance
// --------------------INTERFACE------------------
//duck typing
var someObj = {
    // firstName: 'text',
    lastName: "text",
    middleName: "text",
    getFullName: function () { return "test"; }
};
aPerson = someObj;
// for duck typig ->property must be exactly matching
// aPerson.middlename -> not possible
