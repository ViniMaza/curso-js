function pessoa(){
    this.idade = 0

    setInterval(() => { // this não varia numa arrow function
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new pessoa