class Mae{
    //Atributo
    constructor(nome){
        this.nome = nome
    }
    //Método
    serMae(){
        console.log(`
        Ser mãe é amar alguém mais que a si mesma.
        Ser mãe é deixar de lado os seus próprios interesses para assumir as preocupações de cada filho.
        Ser mãe é sentir por seu filho um amor incondicional e eterno.
        O amor de mãe é diferente de qualquer outra coisa no mundo.
        Feliz dia das mães, ${this.nome}. `)
    }
}

let ivanilda = new Mae("Maria ivanilda")
ivanilda.serMae();
console.log(`Mãe, meu amor por você é maior que o ${Infinity}` )

//Feliz dia das mães!