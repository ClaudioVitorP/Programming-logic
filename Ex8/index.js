//8.	Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene-os nomes lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de pessoa e depois escrever a mensagem ACHEI, se o nome estiver entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.

const promptSync = require ("prompt-sync"); 
const prompt = promptSync();

console.log("Olá, econtre um nome!");

  let nomes = [];

  for (let i = 0; i < 10; i++) {
    let nome = prompt(`Digite o ${i + 1}º nome de 10: `);
    nomes.push(nome.toUpperCase());
  }

  console.table(nomes);
 let encontrar = prompt("Digite o nome que deseja achar: ");
 let encontre = nomes.find(nome => nome == encontrar.toUpperCase());
 !encontre ? console.log("Não encontrado!") : console.log("Encontrado!");
