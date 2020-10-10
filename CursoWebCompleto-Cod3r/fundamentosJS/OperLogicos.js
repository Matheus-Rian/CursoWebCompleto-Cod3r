// XOR(OU especial) - Binário
// XOR(OU especial): Os dois valores comparados tem que ser diferente um do outro, para o retorno ser verdadeiro.
// v xor v -> F
// v xor f -> V
// f xor v -> V
// f xor f -> F

//Negação Lógica - unário
//!v -> f
//!f -> v

function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete; // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};
    //Para retornar as 4 variáveis eu crio um objeto no return

}
console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, false));
console.log(compras(false, true));
