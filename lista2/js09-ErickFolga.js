let today = new Date(2022, 01, 10)
let mes = today.toLocaleString('default', {month: 'long'})
let next = new Date(today.getTime())
let diaFolga = new Date(next.setDate(next.getDate()+2))
let quantosDiasFicaraDeFolga = 4
let dea = new Date(next.setDate(next.getDate()+quantosDiasFicaraDeFolga))
let indice = 0
let indice2 = 0
let diaAtual

for(let diasTrabalhando = 0; diasTrabalhando < quantosDiasFicaraDeFolga; diasTrabalhando++) {

    diaAtual = today.getDate()+indice
    console.log(`No dia ${diaAtual} do mês ${today.toLocaleString('default', {month: 'long'})} Erick estará trabalhando`)
    indice ++
    diaAtual = today.getDate()+indice
}

for(let cont = 0; cont <= 90; cont++) {

    today = new Date(2022, 01, diaAtual)
    console.log(`No dia ${today.getDate()} do mês ${today.toLocaleString('default', {month: 'long'})} Erick estará de folga`)
    diaAtual += 1
    indice2++
    if (indice2 == 2) {
        for(i=0; i < 6; i++){
            today = new Date(2022, 01, diaAtual)
            diaAtual += 1
            console.log(`No dia ${today.getDate()} do mês ${today.toLocaleString('default', {month: 'long'})} Erick estará trabalhando`)
        }

        cont += 6
        indice2 = 0

        }
    }








// let dataAtual = new Date(2022, 07, 11)

// let novaData = new Date(dataAtual)
// let quantosDiasFicaraDeFolga = 6

// // nao precisar disto aqui
// let meses = {
//     0:'Janeiro', 1:'Fevereiro', 2:'Março', 3:'Abril', 4:'Maio', 5:'Junho', 6:'Julho', 7:'Agosto', 8:'Setembro',
//     9:'Outubro', 10:'Novembro', 11:'Dezembro',
// }


// let estado = 'trabalhando'
// for (var cont=0; cont <= 89; cont++){
//     if ( (cont - quantosDiasFicaraDeFolga - 1) % 8 == 0 || (cont - quantosDiasFicaraDeFolga) % 8 ==0){
//         estado = 'folga'
//     }
//     novaData.setDate(novaData.getDate()+1)
//     console.log(`No dia ${novaData.getDate()} do mes ${meses[novaData.getMonth()]} Erick estará ${estado}`)
// }