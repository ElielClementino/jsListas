let verdadeiro = ['yes', 'y', 's', 'sim']
let falso = ['no', 'n']
let input = 'YES'


if(verdadeiro.includes(input.toLowerCase())){
    console.log(true)
}
if(falso.includes(input.toLowerCase())){
    console.log(false)
}