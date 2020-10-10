Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim;
}

const imprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log("Quadro de Honra");
    }else if(nota.entre(7,8.99)){
        console.log("Aprovado");
    }else if(nota.entre(4,6.99)){
        console.log("Recuperação");
    }else if(nota.entre(0,4)){
        console.log("Reprovado");
    }else{
        console.log("Valor inválido");
    }
}
imprimirResultado(9);
imprimirResultado(8);
imprimirResultado(6.5);
imprimirResultado(2);
imprimirResultado(-1);