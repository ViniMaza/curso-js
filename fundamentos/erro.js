function tratarErroELancar(erro){
    //throw true
    throw{
        nome: erro.name,
        msg: erro.essage,
        dates: new Date
    }
}
function imprimirNomeGritado(obj){
    try{
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch (e){
        tratarErroELancar(e)
    } finally{
        console.log('Final')
    }
}


const obj = { name: 'Vinícius'} // erro neste atributo
imprimirNomeGritado(obj)