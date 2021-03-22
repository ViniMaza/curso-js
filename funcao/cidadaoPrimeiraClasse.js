// Função em JS é First-Class Object (Citizens)
//Higher-order function

// Cria uma função literal
function func1(){}

// Armazenar em uma variável
const func2 = function (){}

// Armazenar numa array
const array = [function (a, b) {return a + b}, func1, func2]
console.log(array[0](2, 2))

// Armazenar em um atributo de objeto
const obj = {}

obj.falar = function() {return 'Opa'}
console.log(obj.falar())

// Passar função como param
function run(fun){
    fun()
}

run(function() { console.log('Executando..')})

// Uma função pode retornar/conter uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(3,4)(5)
const cincoMais = soma(3,5)
cincoMais(5)