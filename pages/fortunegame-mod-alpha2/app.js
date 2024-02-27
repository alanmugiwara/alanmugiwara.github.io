//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Fortune game';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um Número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Fortune Game versão Alpha');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;

    //usar crase invertidas para chamar uma template string em vez de aspas ou aspas simples  
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
    }
    else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'O número é menor')
            exibirTextoNaTela('p', 'Tente outra vez')
        } else {
            exibirTextoNaTela('h1', 'O número é maior')
            exibirTextoNaTela('p', 'Tente outra vez')
        }
        // tentativas = tentativas + 1/ (versão mais extensa do )
        tentativas++;
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}