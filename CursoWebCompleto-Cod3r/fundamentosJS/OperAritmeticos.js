//Destructur: Criando 4 const em apenas uma linha.
//Aritméticos são operadores binários(Dois operando).
const [a, b, c, d] = [1, 5, 4, 5];

const soma = a + b + c + d;
const subtracao = b - d;
const mult = a * c;
const divisao = b / d;
const modulo = b % 2 // Ele vai pegar o resto da divisão de b/2. O 2 é muito utilizado para saber se o número é impar ou par.

console.log(soma, subtracao, mult, divisao, modulo);