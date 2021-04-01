function jurosSimples(capInicial, taxaJuros, tempAplic){
    let jsimples = capInicial * taxaJuros * tempAplic
    let montante = capInicial + jsimples
    return console.log('Juro de: R$',jsimples,'\n','Montante: R$',montante)
}
function jurosCompostos(capInicial, taxaJuros, tempAplic){
    let montante = capInicial * Math.pow((1 + taxaJuros), tempAplic)
    return console.log('Juros Compostos\nMontante: R$', montante.toFixed(3))
}

jurosSimples(1000, 0.03, 12)
jurosCompostos(1000, 0.03, 12)