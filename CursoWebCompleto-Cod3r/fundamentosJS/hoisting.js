console.log("a= ", a);
var a = 2;
console.log("a= ", a);

// O js ele faz o hoisting: elevação

var a;
console.log("a= ", a);
a = 2;
console.log("a= ", a);

//Com let não funciona o hoisting
console.log("b= ", b);
let b = 2;
console.log("b= ", b);
