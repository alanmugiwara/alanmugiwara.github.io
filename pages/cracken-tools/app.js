alert('Boas vindas ao Cracken Tools!\nVárias soluções num só lugar!');
alert('Vamos descobrir o seu IMC, bença!');
let user = prompt('Qual o seu nome? ');
alert(`Olá ${user}, bem-vindo(a)!`);
let peso = prompt(`${user}, qual o seu peso em quilogramas? `) * 1;
let altura = prompt('Qual a sua altura? (Use números e pontos, por favor) ') * 1;

function IMC(peso, altura) {
    let imc = peso / altura ** 2;
    if (imc  < 18.5) {
        alert(`${user}, Você possui MAGREZA`);
    }
    else if (imc >= 18.5 && imc < 24.9) {
        alert(`${user}, Você possui peso PADRÃO`);
    }
    else if (imc >= 25 && imc < 29.9) {
        alert(`${user}, Você possui SOBREPESO | GRAU 1`);
    }
    else if (imc >= 30 && imc < 39,9) {
        alert(`${user}, Você possui OBESIDADE | GRAU 2`);
    }
    else if (imc >= 40) {
        alert(`${user}, Você possui OBESIDADE MÓRBIDA | GRAU 3`);
        return imc.toFixed(2);
    }
}

IMC(peso, altura);

alert('Boas vindas ao Cracken Tools!\nVárias soluções num só lugar!');
alert(` ${user}, vamos converter de Dólar USA pra Real BRL!`);
let cambio = 4.95
let  dolar = prompt("Quantos dólares você quer converter para Reais? ") * 1;

function converter(cambio, dolar) {
    let real = cambio  * dolar  * 1;
    alert(`${user}, seus USD (${cambio}) valem BRL (${real})`)
    return reais.toFixed(2);
}

converter(cambio, dolar);
