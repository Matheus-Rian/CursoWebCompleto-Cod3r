function divisao(dividendo, divisor){

    let resultado = dividendo / divisor
    let resto = dividendo % divisor

    console.log(`
    ${dividendo} / ${divisor} =
    Resultado: ${resultado}
    resto: ${resto}`)
}

divisao(2, 2)
divisao(4, 2)