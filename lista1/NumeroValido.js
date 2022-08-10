let numero1 = 10
let numero2 = 20
let soma = numero1 + numero2


if(typeof(numero1 || numero2) != 'number'){
    console.log('Número inválido')
}
else{
    console.log(`A soma dos dois números é: ${soma}`)
}