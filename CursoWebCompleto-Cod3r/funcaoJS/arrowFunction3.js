let comparaComThis = function(param){
    console.log(this === param) 
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) //Em uma função arrow, o this vai estar associado ao local onde a função foi escrita
comparaComThisArrow(global)
comparaComThisArrow(module.exports)//module.exports igual ao THIS

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)