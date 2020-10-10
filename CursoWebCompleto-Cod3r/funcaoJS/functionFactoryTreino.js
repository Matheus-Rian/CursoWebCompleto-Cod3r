//IIFE - Immediately invoked function expression
(function(){
    console.log("Escola: Hello World")
    console.log("Bem vindo a nossa escola!")
})()

//Fuction factory
function cadastrarAluno(nome, idade, serie){
    return {
        nome,
        idade,
        serie
    }
}
console.log(cadastrarAluno("Matheus", 17, "3°ano do ensino médio"))
console.log(cadastrarAluno("Maria", 15, "2°ano do ensino médio"))

//Matheus Rian: Olá gosto de programar!