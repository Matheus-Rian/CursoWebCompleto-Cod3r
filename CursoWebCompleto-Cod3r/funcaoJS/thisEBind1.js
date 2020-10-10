const pessoa = {
    saudacao : "Bom dia",
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar();
const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa);//O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido(pessoa), com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.
falarDePessoa();