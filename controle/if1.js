function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com a nota: ', nota)
    }
}

soBoaNoticia(9)
soBoaNoticia(3)

function seForVerdade(valor){ // exibe se for verdade
    if(valor){
        console.log('É verdade...' + valor)
    }
}

seForVerdade()
seForVerdade(2)
seForVerdade(0)
seForVerdade('')
seForVerdade(' ')