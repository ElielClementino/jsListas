let dias = {1:'Domingo', 2:'Segunda-Feira', 3:'Terça-Feira', 4:'Quarta-Feira', 5:'Quinta-Feira', 6:'Sexta-Feira', 7:'Sábado'}
let diaEscolhido = 1

if(diaEscolhido in dias){
    console.log(`O dia escolhido foi -> ${dias[diaEscolhido]}`)
}
else{
    console.log('Dia Inválido')
}
