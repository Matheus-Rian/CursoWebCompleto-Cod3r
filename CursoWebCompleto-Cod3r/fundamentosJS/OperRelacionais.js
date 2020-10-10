// O retorno sempre será verdadeiro(!!1) ou falso(!!0)
console.log("1)", "1" == 1);
console.log("2)", "1" === 1);
console.log("3)", "3" != 3);
console.log("4)", "3" !== 3);

console.log("5)", 3 < 2);
console.log("6)", 3 > 2);
console.log("7)", 3 <= 2);
console.log("8)", 3 >= 2);

const d1 = new Date(0); //Variável de referência de memória.
const d2 = new Date(0); //Variável de referência de memória.
console.log("9)", d1 === d2); // Vai comparar a referência da memória, então === e == nesse caso NÃO tem diferença. Vai dar FALSE.
console.log("10)", d1 == d2);
console.log("11)", d1.getTime() === d2.getTime());//TRUE. Porque eles tem o mesmo tipo e valor.

console.log("12)", undefined == null);
console.log("13)", undefined === null);