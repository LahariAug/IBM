class personReadDemo{
//   readonly name ;
  middleName = ' john';

  constructor(readonly name :string){

  }

}
var obj = new personReadDemo();
// obj.name = ' hulk';
console.log(obj.name);
// console.log(obj.name = ' kdjkfjd')
obj.middleName = 'middleName';
console.log(obj.middleName);

//u can't modify