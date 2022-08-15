let texto = 'bcbdbuf%'
let textoDecodificado = []
let key = 1
let i = 0
for(cont of texto){
    cont = cont.charCodeAt() - key
    textoDecodificado.push(String.fromCharCode(cont))
    if (textoDecodificado[i] == '@'){
        textoDecodificado[i] = 'z'
    }
    else if (textoDecodificado[i] == '$'){
        textoDecodificado[i] = 'Z'
    }
    i++
}
console.log(textoDecodificado.join(""))



// let texto = 'bcbdbuf%'
// let textoDecodificado = []
// let key = 1

// for(cont of texto){

//     if (cont == 'A'){
// 		textoDecodificado.push(String.fromCharCode(122))
// 	}
// 	if (cont == '%'){
// 		textoDecodificado.push(String.fromCharCode(90))
// 	}   

//     cont = cont.charCodeAt(cont) - key
//     textoDecodificado.push(String.fromCharCode(cont))
// }

