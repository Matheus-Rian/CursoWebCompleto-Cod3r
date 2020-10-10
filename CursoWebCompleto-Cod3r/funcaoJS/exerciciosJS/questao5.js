function conversaoMoeda(valor){
    let valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    console.log(valorFormatado)
}
conversaoMoeda(0.30000000000000004)
conversaoMoeda(543513415125)