let dataAtual = new Date(2022, 07, 11)
let novaData = new Date(dataAtual)
let estado = 'trabalha'
let quantosDiasFicaraDeFolga = 2


let meses = {
0:'Janeiro', 1:'Fevereiro', 2:'Março', 3:'Abril', 4:'Maio', 5:'Junho', 6:'Julho', 7:'Agosto', 8:'Setembro',
9:'Outubro', 10:'Novembro', 11:'Dezembro',
}


console.log(`No dia ${dataAtual.getDate()} do mês ${meses[dataAtual.getMonth()]} Erick estará trabalhando`)

for(var cont=0; cont <= 89; cont++){
    if( (cont - quantosDiasFicaraDeFolga) % 8 == 0 || (cont - quantosDiasFicaraDeFolga + 1) % 8 ==0){
        estado = 'folga'
    }
        else{
            estado = 'trabalhando'
        }
    novaData.setDate(novaData.getDate()+1)
    console.log(`No dia ${novaData.getDate()} do mes ${meses[novaData.getMonth()]} Erick estará ${estado}`)
}
