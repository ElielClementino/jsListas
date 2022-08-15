let numero1 = 20
let numero2 = 30
let soma = numero1 + numero2

if(typeof(numero1) != 'number'){
    console.log(`O '${numero1}' é invalido, deve ser um número`)
}
    else if(typeof(numero2) != 'number'){
        console.log(`O '${numero2}' é invalido, deve ser um número`)
    }
        else{
            console.log(`A soma dos dois números é: ${soma}`)
        }