const tecnologias = new Map();
tecnologias.set('React', { framework: false });
tecnologias.set('Angular', { framework: true });

console.log(tecnologias.react); // Undefined - Maneira errada,
console.log(tecnologias.get('react')); //Maneira Correta.

const chavesVariadas = new Map([
    [function() { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
]);

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor);
});

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);

chavesVariadas.set(123, 'a');
chavesVariadas.set(123, 'b');
chavesVariadas.set(456, 'b');
//A chave não aceita repetição.
console.log(chavesVariadas);