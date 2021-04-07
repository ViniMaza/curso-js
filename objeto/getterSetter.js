const sequencia = {
    _valor: 1, // convenção
    get valor() { return this._valor++},
    set valor(valor){ // não permite que o numero seja menor q o estabelecido
        if(valor > this._valor){
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 100
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 90
console.log(sequencia.valor, sequencia.valor)
