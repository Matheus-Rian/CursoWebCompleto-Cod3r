// Tagged templates - processa o template de uma função
const tag = (partes, ...valores) => {
    console.log(partes);
    console.log(valores);
    return 'Outra string';
};

const aluno = 'Gui';
const situacao = 'Aprovado';
console.log(tag `${aluno} está ${situacao}`)
//No meu primeiro param vai entrar as palavras não interpoladas, enquanro que no segundo param vai as variaveis interpoladas(${aluno})
