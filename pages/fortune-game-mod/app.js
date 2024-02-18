let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio'

function clickBotao () {
    console.log('O botão foi clicado')
}

function alertaDeMensagem () {
    alert('Eu amo você')
}

function askCity () {
let askCity = prompt('Qual a sua cidade?')
alert('Poxa, eu estive em '+ askCity +' e lembrei de você!');
}

function conta () {
let value1 = prompt('Digite um número')
let value2 = prompt('Digite outro número')
let soma = +value1 + +value2
alert('A soma desses valores é ' + soma)

}
