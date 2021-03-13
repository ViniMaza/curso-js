// Armazanando uma função numa variável
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(3, 6)

// Armazenando uma função arrow numa variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 2))

// Retorno implícito

const subtracao = (a, b) => a - b

console.log(subtracao(2, 3))


