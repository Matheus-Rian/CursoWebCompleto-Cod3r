const funcionarOuErro = (valor, chanceErro) => {
    return new Promise((resolve, reject) => {
        try {
            con.log('Dale')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuErro('Testando...', 0.5)
    .then(v => `Valor: ${v}`) //Vai pegar o valor do resolve
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`)) // Vai mostrar o valor  armazenado no reject
    .then(() => console.log('Fim!'))
    //O CATCH normalmente vem no final
    