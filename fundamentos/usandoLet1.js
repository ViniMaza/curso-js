// Let tem escopo global, bloco e function
var numero = 1

{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)