let notas = [8, 9, 10, 7]
let media = 0
let soma = 0
for(cont in notas){
    soma += notas[cont]
}

media = soma / notas.length

console.log(`A média das notas ${notas} é : ${media}`)