const fs = require('fs')
const path = require('path')


const lerArquivo = caminho => {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('1° return será esse console, pois o código não vai esperar a promise ler todo arquivo. A promise só será executada quando todo arquivo for lido, antes disso o cod vai continuar normalmente.')
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n')) //Vai pegar as linhas(\n)
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é ${conteudo}`)
    .then(console.log)