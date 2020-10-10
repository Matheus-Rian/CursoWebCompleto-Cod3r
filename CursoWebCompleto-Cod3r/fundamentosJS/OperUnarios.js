let num1 = 1;
let num2 = 2;

num1++ // pós fixada: Acrescenta uma unidade para a variável.
console.log(num1);
--num1 // pre fixada: Tem precendência em relação a pós fixada.(ex: Em uma expressão ela teria prioridade)
console.log(num1);
console.log(++num1 === num2--); //TRUE. Porque na hora da comparaçãos os dois valem 2, depois da comparação o num2 equivale a 1.
console.log(num1 === num2);
