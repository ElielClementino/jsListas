let fatorialEsquerdo = 5 // entrada do usuario
let fatorialDireito = 1
let produto = 0

while (true){
    produto = fatorialEsquerdo * fatorialDireito
    console.log(`| ${fatorialEsquerdo} x ${fatorialDireito} == ${produto} |`)
    fatorialDireito += 1

   if (fatorialDireito >10){
       break
   }

}
