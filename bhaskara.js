function bhaskara(ax2, bx, c){
    const delta = (Math.pow(bx, 2)) - (4 * ax2 * c)
        if(delta < 0){
        console.log('Delta é negativo')
    }else{
        const x1 = (((-bx)+ (Math.sqrt(delta))) / (2 * ax2))
        const x2 = (((-bx)- (Math.sqrt(delta))) / (2 * ax2))
        return console.log(`X1: ${x1}\nX2: ${x2}`)
    }
}
bhaskara(4, -8, 3)