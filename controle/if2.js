function teste1(num){
    if(num > 7) // sem chaves, funciona apenas uma linha
        console.log(num)
    console.log(num)
}

teste1(9)
teste1(3)

function teste2(num){
    if(num > 7); // cuidado com o ";" nas estruturas de controle
        console.log(num)
    console.log(num)
}

teste2(3)
teste2(8)