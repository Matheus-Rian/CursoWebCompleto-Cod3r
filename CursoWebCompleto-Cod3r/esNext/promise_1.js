//Vou receber um dado no futuro - Promise
//Operador new cria um objeto
//A promise só pode retornar UM valor
//Caso queira passar mais de um valor tem que ser criado um objeto/Array
new Promise(resolve => {
    resolve(['Ana', 'Matheus', 'Eduarda'])
}) 
    .then(valor => valor[0]) //o param acessará o valor da minha Promise
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))
//Eu posso encadear vários then e o resultado do then de cima é passado para o debaixo.
//O then recebe apenas um param