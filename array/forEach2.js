Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Vinicius', 'Sara', 'Bruninha', 'Santos']

// forEach suporta 3 parametros apenas
aprovados.forEach2(function( nome, indice, array, a) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
    //console.log(a)
})