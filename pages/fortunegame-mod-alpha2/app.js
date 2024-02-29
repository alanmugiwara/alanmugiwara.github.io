//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Fortune game';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um Número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

function ExibirWellcome() {
    exibirTextoNaTela('h1', 'Fortune Game versão Alpha');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

ExibirWellcome();

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
        document.getElementById("reiniciar").disabled = false;
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
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function rebootGame() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    ExibirWellcome();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
