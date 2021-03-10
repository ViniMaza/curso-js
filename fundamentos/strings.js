const escola = "Cod3r"
 
// métodos de String
// seleciona a letra que esta dentro do indice 4 da cadeia de caracteres
console.log(escola.charAt(4)) // retorna 'r'
console.log(escola.charAt(5)) // não há nada no indice 5
console.log(escola.charCodeAt(3)) // retorna o valor da tabela unicode '51'

// verifica se há a letra 'd' e retorna a posicão no indice
console.log(escola.indexOf('d'))
console.log(escola.substring(1)) // retorna a string da posicão 1
console.log(escola.substring(0, 3)) // retorna da posicão 0 ao 3 (sem incluir o indice 3)

console.log("Escola ".concat(escola) .concat('!')) // concatenar
console.log("Escola " + escola + '!') // concatena tambem˜

console.log(escola.replace(3, 'e')) // substitui

// Indroducão Array
console.log('Ana, Maria, Pedro'.split(',')) // um separador para Array
