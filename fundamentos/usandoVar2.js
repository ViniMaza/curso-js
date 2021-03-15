// Fuja do escopo global
var numero = 1

/*  
    não existe escopo de bloco para variável do tipo VAR
    com excessão da function
*/
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)