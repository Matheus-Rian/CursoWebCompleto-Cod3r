// função sem retorno

function imprimirSoma(a, b){
    console.log(a + b);
}
imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 3, 5, 7, 8, 7);
imprimirSoma();

//funcção com retorno

function soma(a, b = 1){
//b=0 equivale ao um valor padrão caso o usuário não passe nenhum valor ao mesmo.
    return a + b;
}
console.log(soma(2,3));
console.log(soma(2));
console.log(soma());