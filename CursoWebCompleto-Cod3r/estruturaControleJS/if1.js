function soBoaNoticia(nota){
    if (nota >= 7){
        console.log("Aprovado com a nota:" + nota);
    }
}
soBoaNoticia(8);
soBoaNoticia(6);

function verdadeOuFalso(valor){
    if(valor){
        console.log("É verdade..." + valor);
    }
}
verdadeOuFalso();
verdadeOuFalso(null);
verdadeOuFalso(undefined);
verdadeOuFalso(NaN);
verdadeOuFalso("");
verdadeOuFalso(0); // único número que dará falso.
verdadeOuFalso(-1);
verdadeOuFalso(" ");
verdadeOuFalso("?");
verdadeOuFalso([]);
verdadeOuFalso([1,5,7]);
verdadeOuFalso({});