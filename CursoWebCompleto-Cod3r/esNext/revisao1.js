// let e const
{
    var a = 2; //Escopo global
    let b = 3; //Escopo Local
    console.log(b); 
}
console.log(a);

//Template String
const produto = 'Ipad'
console.log(`${produto} é caro!`)

//destructuring -> Desestruturar(Tirar algo de algum array, objeto e etc.)
const [l, e, ...tras] = 'Cod3r';
console.log(l, e, tras); // l = C; e = o; tras = ['d', '3', 'r']

const [x, ,y] = [1, 2, 3];
console.log(x, y); //[x, ,y] -> O espaço em branco ignora o segundo elemento do meu array.

const { idade: i, nome } = { nome: 'Ana', idade: 9};
console.log(nome); // Ana
console.log(i); // 9 
//idade: i -> Os dois pontos significa renomeação.