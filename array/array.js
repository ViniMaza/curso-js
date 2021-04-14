// array é um objeto. organiza os dados por index
// trabalhar com dados homogênios
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Vinícius', 'Sara')
console.log(aprovados)

aprovados = ['Bia', 'Vinícius', 'Sara']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // altera o Array
console.log(aprovados)

delete aprovados[1]
delete aprovados[2]

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Ana')
aprovados.splice(1, 1)
console.log(aprovados)