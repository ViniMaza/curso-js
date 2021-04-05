// pessoa -> 123 -> {...}
const pessoa = { nome: 'Vinicius'}
pessoa.nome = 'João'
console.log(pessoa)

// Pessoa -> 456 -> {...}
// pessoa.nome = { nome: 'Ana'}

Object.freeze(pessoa) // não posso mais modificar o obj pessoa






