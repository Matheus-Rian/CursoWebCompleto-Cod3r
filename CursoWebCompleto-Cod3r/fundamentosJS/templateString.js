const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!";
const template = `
Olá
${nome}!
`;
console.log(template, concatenacao);
//Template String mais utilizados para variavéis...

//Expressões...
console.log(`1 + 1 = ${1 + 1}`);

//function arrow...
const up = texto => texto.toUpperCase();
console.log(`Eii... ${up("cuidado")}!`);