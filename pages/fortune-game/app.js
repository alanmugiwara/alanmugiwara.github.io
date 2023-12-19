alert('Boas vindas ao >Fortune Game<\nO jogo do número da sorte!\nUm Jogo simples escrito em Java Script.');
let numeroSecreto = 29;
console.log(numeroSecreto)
let chute;
let tentativa = 1;

while (chute != numeroSecreto) {
    chute = prompt('Por favor, escolha um número entre 1 e 30.');

    if (numeroSecreto == chute) {
        alert(`Parabéns! Você descobriu o número secreto!\nQue é ${numeroSecreto}! Em ${tentativa} tentativas, miseravi!`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto na verdade é menor que ${chute}.`);
        } else {
            alert(`O número secreto na verdade é maior que ${chute}.`);
        }
    }
    tentativa++;
}
