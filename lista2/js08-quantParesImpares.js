var lista = [42, 44, 57, 44, 77, 39, 51, 46, 32, 93,
40, 32, 98, 97, 50, 27, 70, 12, 46, 90, 52, 40, 26, 91, 5, 55, 4, 61, 26, 88,
51,	53, 47, 94, 49, 25, 60, 77, 98, 20, 17, 81, 79, 32, 48, 98, 31, 100, 43, 78];


let impares = []
let pares = []

lista.forEach((indice) =>{
    if (indice % 2 == 0){
        pares.push(indice)
    } else{
        impares.push(indice)
    }
})

console.log('PARES')
console.log(`São ${pares.length} numeros pares, sendo eles ${pares}`)

console.log('IMPARES')
console.log(`São ${impares.length} numeros impares, sendo eles ${impares}`)
