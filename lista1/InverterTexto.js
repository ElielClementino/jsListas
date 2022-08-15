// Solution with for
let texto = 'Eliel'
let textoInvertido = []

for(cont = 0; cont < texto.length; cont++){
    textoInvertido.unshift(texto[cont])
}
console.log(textoInvertido.join(''))
console.log(texto)






// Solution with reverse
textoInvertido = texto.split('').reverse().join('')

console.log(textoInvertido)
