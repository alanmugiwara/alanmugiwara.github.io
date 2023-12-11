alert('Boas vindas ao jogo do número secreto'); //Alert exibe mensagem na tela
let numeroSecreto = 29; //Let declara a variável dentro de um bloco {}
let chute = prompt('Escolha um número entre 1 e 30'); //Prompt equivale ao input - que solicita dados  ao usuário
//Acima estamos determinando que a variável chute recerá o mesmo valor que for atribuído no "prompt"

//LET - Ao usar let, você está restrigindo o escopo da variável ao bloco em que ela é declarada. 
//O escopo de bloco significa que a variável só é acessível dentro do conjunto de chaves {} onde foi definida. 
//Isso ajuda a evitar problemas relacionados à poluição do escopo e fornece maior controle sobre onde a variável pode ser usada.
// =(siginifica RECEBE) e ==(Significa realamente igualdade)

if (numeroSecreto == chute) {
    alert('Você descobriu o número secreto (29)');
} 
else {alert('O número digitado está incoreto, aperte "F5" e tente novamente')}

