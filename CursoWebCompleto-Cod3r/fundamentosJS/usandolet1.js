var numero = 1;
// var escopo: global e função.
{
    let numero = 2;
    //let escopo: global, função e bloco{}.
    console.log("Dentro =", numero);
    //preferência escopo menor.
    //Caso não tenha a variável, o código vai procurar em um escopo mais abragente e caso encotre retornará o resultado do maior escopo.
}
console.log("Fora =", numero);