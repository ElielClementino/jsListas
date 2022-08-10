let textoParaCriptografar = 'eliel'
let textoDiferente = ''
let textoCriptografado = []
let textoDescriptografado = []
let cont = 0
// Criptografa o texto 
while(cont < textoParaCriptografar.length){
    textoDiferente = textoParaCriptografar[cont].replace('e', 'd')
    textoCriptografado.unshift(textoDiferente)
    cont += 1
}
console.log(textoCriptografado.join(""))

// Descriptografa o texto criptografado
cont = 0
while(cont < textoCriptografado.length){
    textoDescriptografado.unshift(textoCriptografado[cont].replace('d', 'e'))
    cont += 1
}
console.log(textoDescriptografado.join(""))

