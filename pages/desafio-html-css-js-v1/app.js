let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio'

function clickBotao() {
    console.log('Olá, mundo!');

}

function clickBotao2() {
    let nome = prompt('Qual o seu nome?');
    console.log('Prazer em te conhecer, '+nome+'');
}

function clickBotao3() {
    let nome = prompt('Qual o seu nome?');
    alert(nome +', prazer em te conhecer');
}

function clickBotao4() {
    let nome = prompt('Qual o seu nome?');
    alert('Prazer em te conhecer, '+nome+'');
}

function clickBotao5() {
    let numero = prompt('Digite um número');
    let dobro = numero * 2;
    alert('O dobro desse valor é, '+dobro+'');
}

function clickBotao6() {
    let numero1 = parseFloat(prompt( "Digite o 1º número" ));
    let numero2 = parseFloat(prompt( "Digite o 2º número" ));
    let numero3 = parseFloat(prompt( "Digite o 3º número" ));
    let media = (numero1 + numero2 + numero3) / 3 ;
    alert(media);
}

function clickBotao7() {
    let numero1 = parseFloat(prompt( "Digite o 1º número" ));
    let numero2 = parseFloat(prompt( "Digite o 2º número" ));
    if (numero1 > numero2)
    alert('O primeiro número, '+numero1+'. É maior que o segundo '+numero2+'.');
    else if (numero1 < numero2)
    alert ('O segundo número, '+numero2+'. É maior que o primeiro '+numero1+'.');
    else if (numero1 == numero2)
    alert('Os números são iguais');
}

function clickBotao8() {
    let numero = parseFloat(prompt("Digite um número:"));
    let multiDouble = numero * numero;
    alert('Esse número multiplicado por ele mesmo é, '+multiDouble+'');
}
