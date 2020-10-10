const soma = function (x, y){
    return x + y
}
const imprimirResultado = function (a, b, operacao = soma){ //operacao = soma > operacao é uma função e caso não receba nenhum valor, fará a soma como valor padrão
    console.log(operacao(a, b))
}
imprimirResultado(3, 1)
imprimirResultado(4, 2, soma)
imprimirResultado(2, 3, function(x, y){
    return x - y
})
imprimirResultado(2, 3, (x, y) => x * y)

const pessoa = {
    falar: function(){
        console.log("Opa")
    }
}

pessoa.falar()