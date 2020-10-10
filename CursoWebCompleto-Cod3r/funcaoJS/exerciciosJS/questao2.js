function classificaTriangulo(lado1, lado2 , lado3){
    if(lado1 === lado2 && lado2 === lado3){
        console.log("Triângulo Equilátero")
    }else if(lado1 === lado2 || lado2 === lado3){
        console.log("Triângulo Isóceles")
    }else{
        console.log("Triângulo Escaleno")
    }
}

classificaTriangulo(2, 3, 5)
classificaTriangulo(2, 3, 3)
classificaTriangulo(3, 3, 3)

//Olá!!Você já compartilhou seu conhecimento hoje?