let fatorialEsquerdo = 1
let fatorialDireito = 0
let produto = 0
let cont = 0
while (true){
    produto = fatorialEsquerdo * fatorialDireito
    console.log(`| ${fatorialEsquerdo} x ${fatorialDireito} == ${produto} |`)
    fatorialDireito += 1
    if (fatorialDireito == 11){
        fatorialEsquerdo +=1
        fatorialDireito = 1
        cont += 1
        console.log('---New Tab---')
    }
    if (cont == 10){
        break
    }
}
