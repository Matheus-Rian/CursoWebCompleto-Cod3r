// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }
//     falar() {
//         console.log(`Olá meu nome é ${this.nome}`)
//     }
// }

// const p1 = new Pessoa("Matheus")
// p1.falar()

function Pessoa(nome){
    this.nome = nome

    this.falar = function (){
        console.log(`Olá meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Matheus")
p1.falar()