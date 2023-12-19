alert('Boas vindas ao jogo do número secreto.'); //Alert exibe mensagem na tela
let numeroSecreto = 29; //Let declara a variável dentro de um bloco {}
console.log(numeroSecreto)
let chute //Prompt equivale ao input - que solicita dados  ao usuário

while (chute != numeroSecreto) {
    chute = prompt('Por favor, escolha um número entre 1 e 30.');

    if (numeroSecreto == chute) {
        alert(`Parabéns! Você descobriu o número secreto! Que é ${numeroSecreto}!`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto na verdade é menor que ${chute}.`);
        } else {
            alert(`O número secreto na verdade é maior que ${chute}.`);
        }
    }
}
