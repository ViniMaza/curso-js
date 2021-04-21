function calcularSalario(horasTrabalhadas, recebePorHoras) {
    const salarioFinal = (horasTrabalhadas * recebePorHoras) / 0.3
    return `Salário igual a R$ ${salarioFinal.toFixed(2)}`
}
console.log(calcularSalario(44, 100))