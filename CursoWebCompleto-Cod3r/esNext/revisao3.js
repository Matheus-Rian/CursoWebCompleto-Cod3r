//ES8: Object.values/Object.entries;
const obj = { a: 1, b: 2, c: 3};
console.log(Object.values(obj)); // Retorna o valores dos atributos [1, 2, 3]
console.log(Object.entries(obj)); //Uma array de pares [key, value] enumeráveis de propriedades de um dado objeto
// [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

//Melhorias na notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    bla() {
        return 'Oi!';
    }
};
console.log(pessoa.bla(), pessoa.nome);

//Class
class Animal {}; //Classe Pai
class Cachorro extends Animal { //Classe FIlho
//A classe filho pega todas as características do pai, além de suas próprias características
    falar() {
        return 'Au Au'
    }
};

console.log(new Cachorro().falar())