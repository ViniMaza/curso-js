const nome = 'Vinícius'
const concatenacao = 'Ola ' + nome + '!'
const template = `
    Ola
    ${nome}!`
console.log(concatenacao, template)

//expressões...

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)