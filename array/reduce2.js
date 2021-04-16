const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Vinícius', nota: 10, bolsista: true},
    { nome: 'Pedro', nota: 9.2, bolsista: false},
    { nome: 'Sara', nota: 10, bolsista: true},
]

// Desafio 1: todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

