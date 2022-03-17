var subValue = sub(6);
console.log(subValue);
function subtraction(a, b, c) {
    return a - b;
}
var subValue = subtraction(6, 3); // valid 
subtraction(6, 3, 1); //valid 
subtraction(6, 3, 2, 1); // not valid 
// optional must be given  always @ end
function mul(a, b, c, d) {
    return a - b;
}
function subDefaultValue(a, b, c) {
    if (c === void 0) { c = 1; }
    return a - b - c;
}
var subOutput = subDefaultValue(6, 3);
console.log(" ***************");
console.log(subOutput);
var suboutput2 = subDefaultValue(6, 3, "hello");
console.log(suboutput2);
function subOptionalType(a, b, c) {
    return a - b - c;
}