var personReadDemo = /** @class */ (function () {
    function personReadDemo(name) {
        this.name = name;
        //   readonly name ;
        this.middleName = ' john';
    }
    return personReadDemo;
}());
var obj = new personReadDemo();
// obj.name = ' hulk';
console.log(obj.name);
// console.log(obj.name = ' kdjkfjd')
obj.middleName = 'middleName';
console.log(obj.middleName);
//u can't modify
