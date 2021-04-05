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

// Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('Vinícius', 8000.00, 3)
const f2 = criarFuncionario('Bruninha', 10000.00, 2)
console.log(f1.getSalario().toFixed(2), f2.getSalario().toFixed(2))

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna um Objeto..
const fromJSON = JSON.parse('{"info":  "Sou um JSON"}')
console.log(fromJSON.info)