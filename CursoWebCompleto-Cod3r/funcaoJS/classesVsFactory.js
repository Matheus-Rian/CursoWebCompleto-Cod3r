class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Olá meu nomé é ${this.nome}`)
    }
}

const p1 = new Pessoa("Matheus")
p1.falar()

const CriarPessoa = nome => {
    return {
        falar: () => console.log(`Olá meu nome é ${nome}`)
    }
}
const pessoa = CriarPessoa("Pedro")
pessoa.falar()