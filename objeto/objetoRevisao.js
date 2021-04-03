// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89600,
    proprietario: {
        nome: 'Vinicius',
        idade: 19,
        endereco: {
            lougradouro: 'Boas noites',
            numero: 291
        }
    },
    condutores: [{
        nome: 'Bruna',
        idade: 18,
    }, {
        nome: 'Sara',
        idade: 19,
    }],
    calcularValorSeguro: function(){
        // ...
    }
}
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['lougradouro']
console.log(carro)

delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)