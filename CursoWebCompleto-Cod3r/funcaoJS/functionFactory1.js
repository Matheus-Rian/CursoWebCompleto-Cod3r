// Function Factory: Uma função que no final vai retornar um objeto.

//Factory simples
function criarPessoa(){
    return {
        nome: "Ana",
        Sobrenome: "Silva"
    }
}
console.log(criarPessoa())