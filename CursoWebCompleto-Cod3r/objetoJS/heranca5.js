console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Toda function tem prototype

String.prototype.reverse = function (){
    return this.split('').reverse().join('') //Split - Quebrar a string
}
console.log(('Escola Cod3r').reverse())

Array.prototype.first = function (){
    return this[0]
}
console.log([1,2,3].first())
console.log(['a', 'b', 'v'].first())

String.prototype.toString = function (){ //Não faça isso!
    return 'Lascou tudo'
}

console.log(('Escola Cod3r').reverse())