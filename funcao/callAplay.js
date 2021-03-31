function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notbook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

preco = 20
desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20}
// a diferença é a forma como você passa os parâmetros pra chamada da função
console.log(getPreco.call(carro, 0.32, '$'))
console.log(getPreco.apply(carro, [0.12, '*&']))