function soma(){
    let soma = 0
    for(let i in arguments){ // recupera parâmetros
        soma += arguments[i]
    }
    return soma
}

console.log(soma(4, 8, 8, 3, 3))
console.log(soma())
