let var1 = 0.4 * 0.8

console.log(var1)
function formatarDinheiro(valor){
    return console.log('R$' + parseFloat(valor).toPrecision(2))
}
formatarDinheiro(var1)