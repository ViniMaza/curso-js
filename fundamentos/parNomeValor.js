// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exe(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Vinicius',
    idade: 19,
    peso: 80,
    endereco: {
        logradouro: 'Rua do bailão',
        numero: 123
    }
}

console.log(saudacao)
console.log(exe())
console.log(cliente)