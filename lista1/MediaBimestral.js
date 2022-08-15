let notas = [8, 9, 10, 7]
let media = 0
let soma = 0
let situacao = ''
for(cont in notas){
    soma += notas[cont]
}

media = soma / notas.length

if(media < 7){
    situacao = 'reprovado'
}
    else{
        situacao = 'aprovado'
    }


console.log(`A média das notas ${notas} é : ${media} e você está ${situacao}`)