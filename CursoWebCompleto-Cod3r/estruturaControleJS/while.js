function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (min-max) + min;
    return Math.floor(valor);
}

let opcao = 0;

while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1,2);
    console.log(`A opção escolhida foi ${opcao}`);
}
console.log("Até a próxima");