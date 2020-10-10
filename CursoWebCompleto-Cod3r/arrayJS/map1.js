const nums = [1, 2, 3, 4, 5]

//For com propósito
//Map: Vai transformar cada elemento do seu array de acordo com seu param
//Map: Vai originar um array do mesmo tamanho do array passado
let resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado, nums)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
