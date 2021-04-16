const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Vinícius', nota: 10, bolsista: true},
    { nome: 'Pedro', nota: 9.2, bolsista: false},
    { nome: 'Sara', nota: 10, bolsista: true},
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, )

console.log(resultado)