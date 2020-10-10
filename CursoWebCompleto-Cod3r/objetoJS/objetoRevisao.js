// Objeto é uma coleção dinãmica de pares chaves/valor
const produto = new Object
produto.nome = "Cadeira"
produto["marca do produto"] = "Genérica"
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto["marca do produto"]
console.log(produto)

const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario: {
        nome: "Matheus",
        idade: 17,
        endereco:{
            logradouro: "Rua aprendiz",
            numero: 202
        }        
    },
    condutores: [{
        nome: "Ivanilda",
        idade: 20
    },{
        nome: "Eduarda",
        idade: 10
    }],
    calcularValorSeguro(){
        //...
    }
}

carro.proprietario.endereco.numero = 111
carro["proprietario"]["endereco"]["logradouro"] = "Av.gigante" 
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)