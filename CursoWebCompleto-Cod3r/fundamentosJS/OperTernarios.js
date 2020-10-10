const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado";
//Ternário(nota >= 7 ? "Aprovado" : "Reprovado")
//nota >= 7(Expressão Relacional) 
// ? - Condição VERDADEIRA(?)
// : - Condição Falsa(:)
//Como só tenho um parâmentro não precisa dos ()
console.log(resultado(7.1));
console.log(resultado(6.7));