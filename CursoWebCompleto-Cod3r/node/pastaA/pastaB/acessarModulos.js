// ../ -> Sai de uma pagina
// ../../ -> Sai de duas paginas e assim sucessivamente
// requie -> Método de importar arquivos no node

const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}). listen(8080)