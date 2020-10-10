//pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)


//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) //Eu não posso mais atribuir nada ao objeto pessoa, O objeto se torna uma constante

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)