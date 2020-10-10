const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 9.0, 7.1]

//Sem callBack
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//Com callBack
let notaMenorQue7 = nota => nota < 7
let = notasBaixas2 = notas.filter(notaMenorQue7)
console.log(notasBaixas2)
