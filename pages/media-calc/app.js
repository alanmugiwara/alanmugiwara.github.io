alert('Boas vindas ao calculador de medias!');
let aluno = prompt('Digite o Nome do Aluno ');
let nota1 = prompt('Digite o valor da 1ª nota ') * 1;
let nota2 = prompt('Digite o valor da 2ª nota ') * 1;
let nota3 = prompt('Digite o valor da 3ª nota ') * 1;
let nota4 = prompt('Digite o valor da 4ª nota ') * 1;

function verificarAprovacao(aluno, media) {
    if (media > 7) {
        alert(aluno + ', foi aprovado.');        
    } else {
        alert(aluno + ', foi reprovado.');
    }
//    alert(aluno + ', foi ' + (media > 7 ? 'aprovado.' : 'reprovado.'));    
}

function calcularMedia(aluno) {
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    alert('A Média do '+aluno+' é '+media+'.');
    verificarAprovacao(aluno, media);
    return media;
}

calcularMedia(aluno);
