const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //Vai pegar todas as chaves do objeto
// ['nome', 'idade', 'peso']
console.log(Object.values(pessoa)) //Vai pegar os valores
//[ 'Rebeca', 2, 13 ]
console.log(Object.entries(pessoa)) //Chave e valor 
//[ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value:'01/01/2020'
})
//Definir uma propriedade(pode ser alterada?)

pessoa.dataNascimento = '01/10/2000'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3 , a:4}
const obj = Object.assign(dest, o1, o2)//Todos os atributos colocado no parâmetro vai para a variável
//{ a: 4, b: 2, c: 3 }

Object.freeze(obj)
obj.c = 1234
console.log(obj)