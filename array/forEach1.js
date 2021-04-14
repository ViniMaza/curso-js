const aprovados = ['Vinicius', 'Sara', 'Bruninha', 'Santos']

// forEach suporta 3 parametros apenas
aprovados.forEach(function( nome, indice, array, a) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
    //console.log(a)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)