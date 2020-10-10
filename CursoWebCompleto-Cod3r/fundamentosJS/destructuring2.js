const [a] = [10];
console.log(a);

const [n1 , ,n3, ,n5, n6 = 0] = [10, 8, 7, 6];
console.log(n1, n3, n5, n6);

const [, [, nota] ] = [[6, 7, 8], [5, 4, 2]];
console.log(nota);