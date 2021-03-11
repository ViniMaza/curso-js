const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // retorna '7.7 e 9.2'
console.log(valores[4]) // retorna 'undefined'

valores[4] = 10 // add posicao da array
console.log(valores)
console.log(valores.length) // conta quantidade de elementos d uma array

// add novos elemetos numa array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)


console.log(valores.pop()) // remove o ultimo elemento da array

delete valores[0]
console.log(valores)

console.log(typeof valores) // array é do tipo OBJECT




