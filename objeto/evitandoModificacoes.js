// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // return false

produto.nome = 'Borracha' // alterando o atributo que já existe
produto.descricao = 'Borracha escolar branca' // cria um novo atributo (mas vai ser ignorado)
delete produto.tag // deleta o atributo tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Vinícius', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Marques'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze selado + valores constantes