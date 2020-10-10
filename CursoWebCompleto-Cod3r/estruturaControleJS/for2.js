const notas = [7, 5, 6, 8, 9]; // for in vai percorrer pelos indices e não pelo valor

for(let i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome: "Ana",
    sobreNome: "Silva",
    idade: 15
}

for (let atributo in pessoa){
    console.log(pessoa[atributo]);
}