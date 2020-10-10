function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto("Iphone", 3.399,52))
console.log(criarProduto("Notebook", 2.399,52))