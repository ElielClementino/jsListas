let dias = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado', 'Inválido']
let dia_escolha = 2
let dia_escolhido = ''
switch(dia_escolha){
    case 1:
        dia_escolhido = dias[0]
        break
    case 2:
        dia_escolhido = dias[1]
        break
    case 3:
        dia_escolhido = dias[2]
        break
    case 4:
        dia_escolhido = dias[3]
        break
    case 5:
        dia_escolhido = dias[4]
        break
    case 6:
        dia_escolhido = dias[5]
        break
    case 7:
        dia_escolhido = dias[6]
        break
    default:
        dia_escolhido = dias[7]
}
console.log(`Dia: ${dia_escolhido}`)






























// let diass = 
// {1:'Domingo',
// 2:'Segunda-Feira',
// 3:'Terça-Feira',
// 4:'Quarta-Feira',
// 5:'Quinta-Feira',
// 6:'Sexta-Feira',
// 7:'Sábado'}
// let diaEscolhido = 1

// if(diaEscolhido in dias){
//     console.log(`O dia escolhido foi -> ${dias[diaEscolhido]}`)
// }
// else{
//     console.log('Dia Inválido')
// }

// fazer com switch(entrada) case