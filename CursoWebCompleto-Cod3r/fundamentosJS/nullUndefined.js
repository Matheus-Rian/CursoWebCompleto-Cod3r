let valor; // não iniciliazada
console.log(valor);
valor = null // ausência de valor
console.log(valor);
//console.log(valor.toString()); // Erro, caso tente acessar um valor null

const prod = {
    preco : 3.50
};
console.log(prod.preco);
console.log(prod);

prod.preco = undefined; // Evite atribuir undefined
console.log(!!prod.preco);
//delete prod.preco
console.log(prod);

prod.preco = null; //Esse produto não tem preço
console.log(!!prod.preco);
console.log(prod);