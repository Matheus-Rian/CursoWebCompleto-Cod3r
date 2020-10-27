const esperarPor = (tempo = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), tempo);
  });
};

// esperarPor(3000)
//     .then(() => console.log("Executando promise 1..."))
//     .then(esperarPor)
//     .then(() => console.log("Executando promise 2..."))
//     .then(esperarPor)
//     .then(() => console.log("Executando promise 3..."))

const retornarValor = (tempo = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
};

async function retornarValorRapido() {
    return 20 // O retorno será uma promise
}

async function executar() {
  let valor = await retornarValorRapido(); //Sem o await eu pegaria a promise([object Promise]) e NÃO o valor(20)

  await esperarPor(1000);
  console.log(`Async/Await ${valor}...`);
  //Await espera a promise ser resolvida, só depois de resolvida o cod continua.

  await esperarPor(1000);
  console.log(`Async/Await ${valor + 1}`);

  await esperarPor(1000);
  console.log(`Async/Await ${valor + 2}...`);

  return valor + 3;
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()
