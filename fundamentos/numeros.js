// duas formas de criar um número
const peso1 = 1.0
const peso2 = Number('2.2')

console.log(peso1,peso2)

//um dos métodos da função Number verifica se é inteiro ou não
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))


//avaliação aritmética
const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(total)
console.log(media.toFixed(2)) // controla a quantidade de casas decimais
console.log(media.toString()) // transforma em String
console.log(Number.isInteger(media))
console.log(media.toString(2)) // transforma em binário
console.log(typeof Number)