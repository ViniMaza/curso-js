// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDescomto= () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto ('Caneta', 7.99, 0.15)
const p2 = new Produto ('Notbook', 2998.99, 0.25)
console.log(p1.getPrecoComDescomto(), p2.getPrecoComDescomto())