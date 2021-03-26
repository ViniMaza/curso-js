const fabricantes = ['carro1', 'carro2', 'carro3']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))