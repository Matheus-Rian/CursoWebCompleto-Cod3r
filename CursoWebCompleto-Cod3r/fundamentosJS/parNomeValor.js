// par Nome/Valor
const saudacao = "Opa";//contexto léxico 1

function exec (){
    const saudacao = "Fallaaa"; //contexto léxico 2
    return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 35,
    peso: 90,
    endereco: {
        logradouro: "Rua muito Legal",
        numero: 123
    }
}
console.log(saudacao);
console.log(exec());
console.log(cliente);