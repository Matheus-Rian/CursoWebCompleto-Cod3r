const prod1 = {};
prod1.nome = "Celular Top";
prod1.preco = 4550.50;
prod1["Desconto Legal"] = 0.40; //Evitar atributos com espaços...

console.log(prod1);

const prod2 = {
    nome: "Camisa Polo",
    preco: 48.50,
    obj: {
        blabla : 1,
        obj: {
            blabla : 2
        }
    }
}

console.log(prod2);