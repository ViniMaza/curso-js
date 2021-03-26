// No contexto do NODE

let comparaComThis = function (param){
    console.log(this === param)
}
comparaComThis(global) // true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // false
comparaComThis(obj) // true

// this aponta ao objeto corrente, módulo corrente, o aquivo no qual essa função foi definida
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
// teste
comparaComThisArrow(module.exports) // true

// Não muda, Arrow function é mais forte que o .bind()
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) 

// o this de uma arrow function, é um this associada ao contexto em que foi empregada. 