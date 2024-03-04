alert('Boas vindas ao Cracken Tools!\nVárias soluções num só lugar!');
alert('Vamos descobrir o seu IMC!');
let user = prompt('Qual o seu nome? ');
alert(`Olá ${user}, bem-vindo(a)!`);
let peso = prompt(`${user}, qual o seu peso em quilogramas? `) * 1;
let altura = prompt('Qual a sua altura? (Use números e pontos, por favor) ') * 1;

function IMC(peso, altura) {
    let imc = peso / altura ** 2;
    if (imc  < 18.5) {
        alert(`${user}, Você possui MAGREZA | OBESIDADE GRAU 0`);
    }
    else if (imc >= 18.5 && imc < 24.9) {
        alert(`${user}, Você possui NORMAL | OBESIDADE GRAU 0`);
    }
    else if (imc >= 25 && imc < 29.9) {
        alert(`${user}, Você possui SOBREPESO | OBESIDADE GRAU 1`);
    }
    else if (imc >= 30 && imc < 39,9) {
        alert(`${user}, Você possui OBESIDADE | OBESIDADE GRAU 2`);
    }
    else if (imc >= 40) {
        alert(`${user}, Você possui OBESIDADE MÓRBIDA | OBESIDADE GRAU 3`);
        return imc.toFixed(2);
    }
}
IMC(peso, altura);
