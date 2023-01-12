//1.	O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

const promptSync = require ("prompt-sync"); 
const prompt = promptSync();

console.log("Olá, calcule agora mesmo custo final do seu novo carro!");

var precodefabrica = parseFloat (prompt("Qual o preço de fábrica do carro? R$"));

while (!precodefabrica) {
    precodefabrica == 0 ;
        console.log("Opção invalida");

    precodefabrica = parseFloat(prompt("Qual o valor de fábrica do carro? R$"));
}

console.log(`O custo final é: R$ ${precodefabrica * 1.73}`);

console.log("")

