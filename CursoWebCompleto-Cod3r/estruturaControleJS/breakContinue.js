const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i in numeros){
    if (i == 5) {
        break;
    }
    console.log(`${i} = ${numeros[i]}`);
}

for (let j in numeros){
    if (j == 5) {
        continue;
    }
    console.log(`${j} = ${numeros[j]}`);
}
// Não use!!
externo: for (a in numeros){
    for (b in numeros){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}