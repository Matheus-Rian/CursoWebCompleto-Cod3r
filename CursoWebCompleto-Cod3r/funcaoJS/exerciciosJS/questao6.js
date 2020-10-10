// Juros: capital · taxa · tempo
// Montante: M = C + J
function simplesMontante(capital, taxa, tempo){
    let juros = capital * taxa * tempo
    let montanteSimples = capital + juros
    console.log(`O montante é: ${montanteSimples.toFixed(2)}`)
}
simplesMontante(1400, 0.07, 2)

function compostoMontante(capital, taxa, tempo){
    let montanteComposto = capital * (1 + taxa) ** tempo
    console.log(`O montante é: ${montanteComposto.toFixed(2)}`)
}
compostoMontante(1400, 0.07, 2)