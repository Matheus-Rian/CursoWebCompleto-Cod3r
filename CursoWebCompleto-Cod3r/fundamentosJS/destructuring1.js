//Novo recurso do Ecma2015
const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro:"Rua ABC",
        numero: 1000
    }
}

const { nome, idade} = pessoa;
//Vai criar nome e idade extraindo de pessoa(Objeto)
// Operador destructuring: retira objetos da minha const(pessoa). { } - Objeto
console.log(nome, idade);

const { nome: n, idade: i} = pessoa;
console.log(n, i);
const { sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

const { endereco:{ logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);