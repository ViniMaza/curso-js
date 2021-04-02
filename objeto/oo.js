// Código Não Executável

// Procedural
processamento(valor1, valor2, valor3)

// OO
objeto = {
    valor1,
    valor2,
    valor3,
    processamento(){
        // ...
    }
}
objeto.processamento() // O foco passou a ser o objeto

// Princípios Importantes

// 1. Abstração
    /*
    É pegar um objeto do mundo real e entender
    como traduzir para dentro do sistema.
    EX: CARRO
        atributos
            PESO, ALTURA, LATGURA, COMPRIMENTO
            VELO MAX, VELO MIN, VELO ATUAL
        métodos
            LIGAR, DESLIGAR, ACELERAR
    Entender como mapear o mundo e como trazer isso ao software
    */

// 2. Encapsulamento
    /* 
    Serve para esconder certos detalhes dos funcionamentos dos métodos
    de uma classe, porque não seria interessante que qualquer um conseguisse
    modificar esses valores.

    Imagina a seguinte situação, você tem uma conta num banco, que obviamente
    contém suas informações cadastrais - nome, telefone, e-mail, senha, número da conta, etc.
    Você poderia armazenar esses valores numa classe ContaBancaria, que teria um método
    chamado de cadastro(), por exemplo, que receberia e armazenaria todos esses valores,
    nome = "Leonardo", senha = 123456, etc.

    Não é interessante que algum outro objeto seja capaz de modificar esses valores,
    porque você perderia o acesso à sua conta! Então, é para isso que o encapsulamento serve;
    para proteger e esconder certas propriedades, impedindo que elas sejam modificadas fora
    de uma determinada classe; desse modo, se por acaso você quisesse mudar a sua senha, 
    teria que fazê-lo dentro da classe ContaBancaria, por meio dos métodos da 
    mesma - um método chamado mudarSenha, por exemplo, seria capaz de acessar a 
    propriedade senha e atribuir a ela um novo valor internamente - e não poderia fazer 
    por nenhum outro processo externo.
    */

// 3. Herança (Prototype)
    /* 
    Ocorre quando uma classe herda atributos ou métodos de sua 
    superclasse, ou seja, o comportamento de sua superclasse.
    */
// 4. Polimorfismo
    /* 
        Ocorre quando uma classe redefine o comportamento de sua superclasse, 
        sobrescrevendo métodos ou alterando o valor de atributos, por exemplo.
        
        Ou seja, o polimorfismo pode ocorrer à partir da herança.
    */