const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()// Elimina o último elemento
console.log(pilotos)

pilotos.push('Verstappen')// Adiciona um elemento na última posição
console.log(pilotos)

pilotos.shift()// remove o elemento da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona um elemento na primeira posição
console.log(pilotos)

//O splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)//Massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//Gera um novo array a partir do indice passado no param
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // O indice 4 não entra
console.log(algunsPilotos2)