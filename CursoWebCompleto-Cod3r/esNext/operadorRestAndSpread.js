// operador ...rest(juntar)/spread(espalhar)
//usar rest com parâmetro de functions

//usar SPREAD com objetos
const funcionario = { nome:'Maria', salario: 12248.99 };
const clone = {ativo: true, ...funcionario}; //spread
console.log(clone);

//usar SPREAD com array
const grupoA = ['João', 'Maria', 'Matheus'];
const grupoFinal = ['Gabriela', ...grupoA, 'Pedro'];
console.log(grupoFinal);
