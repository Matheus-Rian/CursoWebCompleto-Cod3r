//Arrow Function
const soma = (a,b) => a + b;
console.log(soma(2, 3));

//Arrow Function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1()
lexico2()

//parametro default
const padrao = (texto = 'Default') => console.log(texto);
padrao() //Caso não seja passado nenhum valor para texto, a variavel assumirá o valor padrão passado no param da arrow Function
padrao('More stregth')

//Operador rest -> nos permite representar um número indefinido de argumentos como um array
const rest = (...numeros) => {
    let total = 0;
    numeros.forEach(n => total += n);
    return total;
};
console.log(rest(2, 3, 5, 7, 9));