var anoNascimento = 2002
var nome = 'Eliel'
var dataAtual = new Date()
var anoAtual = dataAtual.getFullYear();
var idadeDoUsuario = anoAtual - anoNascimento
var resultado = `👉 ${nome} nascido em ${anoNascimento} , sua idade é + ${idadeDoUsuario}`
console.log(resultado)