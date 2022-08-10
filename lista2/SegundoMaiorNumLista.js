var lista = [42, 44, 57, 44, 77, 39, 51, 46, 32, 93,
    40, 32, 98, 97, 50, 27, 70, 12, 46, 90, 52, 40, 26, 91, 5, 55, 4, 61, 26, 88,
    51,	53, 47, 94, 49, 25, 60, 77, 98, 20, 17, 81, 79, 32, 48, 98, 31, 100, 43, 78];


let maior = 0
let segundoMaior = 0
lista.forEach(function(indice){
    if(indice > maior){
        maior = indice
    }
    lista.forEach(function(indice){
        if (indice > segundoMaior && indice < maior){
            segundoMaior = indice
        }
    })
})
console.log(maior)
console.log(segundoMaior)