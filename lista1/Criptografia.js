
let texto = 'abacatez'
let textoCodificado = []
let letra = ''
let key = 1


for(cont of texto){
    if (cont == 'z'){
		cont = '@'
	}
	if (cont == 'Z'){
		cont = '$'
	}
    cont = cont.charCodeAt() + key
    textoCodificado.push(String.fromCharCode(cont))
}
console.log(textoCodificado.join(''))
