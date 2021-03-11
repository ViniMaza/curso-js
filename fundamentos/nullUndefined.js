let valor // não inicializada
console.log(valor) // undefined

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // ERROR

const produto = {}
console.log(produto)
console.log(produto.preco)
//console.log(produto.preco.a)

produto.preco = 3.50
console.log(produto)