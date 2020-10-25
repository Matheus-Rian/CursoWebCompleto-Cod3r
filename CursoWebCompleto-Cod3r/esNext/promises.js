const falarDepoisDe = (segundos, frase) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase); //resolve aceita apenas um param
        }, segundos * 1000);
    });
};

falarDepoisDe(3, 'Que legal')
    //Pode chamar o .then quantas vezes quiser. O valor será passado para cada uma(efeito pirâmide)
    .then(frase => frase.concat('?!?')) // Tratamento de acerto(then)
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)); //Tratamento de erro
    
    