// Object.preventExtensions - Não consegue adicionar nenhum atributo após a criação
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal - Não adiciona e nem remove os atributos, mas pode mudar o valor dos existentes.

const pessoa = {nome: 'Juliana', idade:35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze - Congela o objeto. Não pode add, remover nem mudar os valores!