const gerarNumerosEntre = (min, max, tempo) => {
    if(min > max)  [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max-min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

const gerarVariosNumeros = () => {
    return Promise.all([
        gerarNumerosEntre(1, 20, 4000),
        gerarNumerosEntre(1, 20, 1500),
        gerarNumerosEntre(1, 20, 300),
        gerarNumerosEntre(1, 20, 400),
    ])
}

console.time('promise')
gerarVariosNumeros()
    .then(console.log)
    .then(() => console.timeEnd('promise'))