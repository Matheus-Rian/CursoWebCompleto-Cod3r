
function resolverBhaskara (ax2, bx, c){
    let delta = bx**2 - 4 * (ax2 * c)
    console.log(delta)
    console.log(Math.sign(delta))
    if(Math.sign(delta) === 1){
        let raiz1 = -bx + Math.sqrt(delta) / 2
        console.log(raiz1)
        let raiz2 = -bx - Math.sqrt(delta) / 2
        console.log(raiz2)
    }else{
        console.log("Delta negativo") 
    }

}
console.log(resolverBhaskara(3, -5, -12))
