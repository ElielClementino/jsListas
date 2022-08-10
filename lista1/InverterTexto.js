let texto = 'Eliel'
let textoInvertido = []

for(cont = 0; cont < texto.length; cont++){
    textoInvertido.unshift(texto[cont])
}
console.log(textoInvertido.join(''))