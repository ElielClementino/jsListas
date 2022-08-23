let dataAtual = new Date(2022, 07, 11)

let novaData = new Date(dataAtual)
let quantosDiasFicaraDeFolga = 6

// nao precisar disto aqui
let meses = {
    0:'Janeiro', 1:'Fevereiro', 2:'Março', 3:'Abril', 4:'Maio', 5:'Junho', 6:'Julho', 7:'Agosto', 8:'Setembro',
    9:'Outubro', 10:'Novembro', 11:'Dezembro',
}


let estado = 'trabalhando'
for (var cont=0; cont <= 89; cont++){
    if ( (cont - quantosDiasFicaraDeFolga - 1) % 8 == 0 || (cont - quantosDiasFicaraDeFolga) % 8 ==0){
        estado = 'folga'
    }
    novaData.setDate(novaData.getDate()+1)
    console.log(`No dia ${novaData.getDate()} do mes ${meses[novaData.getMonth()]} Erick estará ${estado}`)
}
