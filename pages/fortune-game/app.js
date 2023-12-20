alert("Boas vindas ao >Fortune Game<\nO jogo do número da sorte!\nUm Jogo simples escrito em Java Script.");
alert('Caso queira sair do jogo digite "sair"\nna barra de informações.');
let numeroSecreto = 15;
console.log(numeroSecreto);
let chute;
let tentativa = 1;
let maxNum = 50;

while (chute != numeroSecreto) {
  chute = prompt(`Por favor, escolha um número entre 1 e ${maxNum}.`);
  if (numeroSecreto == chute) {
    alert(`Parabéns! Você descobriu o número secreto!\nQue é ${numeroSecreto}! Em ${tentativa} tentativas, miseravi!`);
  } else {
    if (chute.toLowerCase() === 'sair') {
      alert("Você saiu do jogo.");
      break;

    } else {
      if (chute > maxNum) {
        alert(`Acho que você não leu.\nVocê digitou um número\nmaior que ${maxNum}!`);
      } else {
        if (chute > numeroSecreto) {
          alert(`O número secreto na verdade é menor que ${chute}.`);
        } else {
          alert(`O número secreto na verdade é maior que ${chute}.`);
        }
        tentativa++;
      }
    }
  }
}
