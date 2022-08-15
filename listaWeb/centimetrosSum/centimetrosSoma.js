// debugger
var input1 = document.getElementById('valor1');
var input2 = document.getElementById('valor2');
var button = document.getElementById('sum');
var soma

console.log(soma)


button.addEventListener('click', function(){
    soma = parseInt(input1.value) + parseInt(input2.value)
    alert(soma)
})