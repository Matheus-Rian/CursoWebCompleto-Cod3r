
console.log(soma(3,4))// O JS primeiro carregar todas as funções(function declaration), antes de executar o código

//function declaration
function soma(x, y){
    return x + y
}

//function expression
const sub = function (x, y){
    return x - y
}
console.log(sub(3,4))

//named function expression(ps: Pouco utilizada. única possível vantagem é na hora de debugar)
const mult = function mult(x, y){
    return x * y
}
console.log(mult(1,5))
