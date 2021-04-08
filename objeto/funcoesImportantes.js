const pessoa = {
    nome: 'Vinicius',
    idade: 19,
    peso: 80
}
console.log(Object.keys(pessoa)) // retorna as chaves do objeto
console.log(Object.values(pessoa)) // retorna as valores do objeto

// retorna uma array contendo as chaves e os valores do objeto
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // se uma propriedade vai ser listada ou não
    writable: false, // se uma propriedade pode ser modificada ou não
    value: '01/01/2019' // adicionando valor
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)