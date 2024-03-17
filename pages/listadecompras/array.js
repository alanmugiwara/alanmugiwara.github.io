// Exercício de criação de array

let listaDeCompras = [ ["molho de tomate", "azeite de oliva"], // tempero_industrializado
["alho", "cebola", "pimenta preta", "chimichurri", "paprica", "sal do himalaia", "gengibre"], // tempero_natural 
["brócolis", "cenoura", "tomate", "beterraba", "cebola", "alho"], //vegetais
["ovo", "achocolatado", "semente de girassol", "semente de chia", "canela em pó", "farinha de aveia", "queijo_cootage", "leite", "mel", "pão integral"], // matinal
["aveia em pó", "canela em pó", "pasta de amendoim", "banana"], // lanche_manhã
["feijão", "arroz branco", "carne moída", "calabresa", "bacon", "peito de frango", "frango moído", "batata doce"], // almoço e janta
["iogurte", "pão_tradicional"] ]; // lanche da tarde

let escolha = parseInt(prompt("Digite o número da categoria da lista de compras que você deseja ver:\n\n0 - Temperos industrializados\n1 - Temperos naturais\n2 - Vegetais\n3 - Matinal\n4 - Lanche da manhã\n5 - Almoço e janta\n6 - Lanche da tarde"));

let listaEscolhida = listaDeCompras[escolha];

let listaFinal = listaEscolhida.join('\n');
alert(listaFinal);


/* indície      |      Elemento
     0             "primeiro elemento"

*/
