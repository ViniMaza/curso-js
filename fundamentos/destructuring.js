// novo recurso do ES2015

const pessoa = {
    nome: 'Vinicius',
    idade: 19,
    endereco: {
        logradouro: 'Rua show',
        numero: 291
    }
}

// Destructuring
const { nome, idade } = pessoa
console.log(nome, 'tem', idade, 'anos')

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//const { sobreNome, apelido = true} = pessoa
//console.log(sobreNome, apelido)







