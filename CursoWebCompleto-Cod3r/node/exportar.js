console.log(module.exports)
console.log(this === module.exports)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true }
//Será retornado aquilo que está dentro do module.exports