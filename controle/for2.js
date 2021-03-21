const notas = [6.5, 7, 3.4, 9, 2.5]

for(let i in notas){ // IN - índice
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Vinicius',
    sobrenome: 'Marques',
    idade: 19,
    peso: 80
}

for(let atributo in pessoa){ // 
    console.log(`${atributo} = ${pessoa[atributo]}`)
}