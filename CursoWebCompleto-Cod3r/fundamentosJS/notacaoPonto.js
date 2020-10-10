console.log(Math.ceil(6.1));
//. ponto é utilizado para acessar os membros 
const obj1 = {};
obj1.nome = "bola";
//obj1["nome"] = "bola2";
console.log(obj1.nome);

function Obj(nome){
    this.nome = nome; // this torna pública o valor
    this.exec = function (){
        console.log("exec...");
    }
}

const obj2 = new Obj("cadeira");
const obj3 = new Obj("Mesa");
console.log(obj2.nome);
console.log(obj3.nome);
obj2.exec();