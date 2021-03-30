function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('PC', 1000.00))
console.log(criarProduto('caneta', 2.00))