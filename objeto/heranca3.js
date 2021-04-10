const pai = { nome: 'Pedro', corCabelo: 'preto'}

// cria um novo objeto utilizando um outro objeto existente como protótipo
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo) // herdou corCabelo de objeto pai

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', 
    writable: false, 
    enumerable: true 
    }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

