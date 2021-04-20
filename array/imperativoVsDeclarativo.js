const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Bruna', nota: 6},
    {nome: 'Vinícius', nota: 8.4},
    {nome: 'Sara', nota: 5}
]

// Imperativo (como ser feito)
let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo (oque ser feito)
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)