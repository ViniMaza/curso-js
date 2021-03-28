function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo privado
    let velocidadeAtual = 0

    // método publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro(300, 230)
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())
console.log(typeof Carro)
console.log(typeof uno)