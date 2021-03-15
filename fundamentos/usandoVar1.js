// VAR é global
{
    {
        {
            var sera = "Sera???"
            console.log(sera)
        }
    }
}

console.log(sera) // imprime o resultado

function teste(){
    var local = 123
}

teste()
// console.log(local) // não imprime o resultado 