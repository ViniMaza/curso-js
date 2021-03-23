function pessoa(){
    this.idade = 0

    const self = this // Forma de driblar o "this" que pode variar
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new pessoa