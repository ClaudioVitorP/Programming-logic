//7.	Escrever um algoritmo que lê cinco números inteiros, um de cada vez, armazena os números lidos em um vetor e a partir da leitura do vetor imprime qual é o maior e o menor dos números lidos e também a soma dos números lidos.

const promptSync = require ("prompt-sync"); 
const prompt = promptSync();

console.log("Olá, consulte os números.");

let numero = [];

  for (let i = 0; i < 5; i++) {
    let num = prompt(`Digite o ${i + 1}º número de 5: `);

    while (!num) {
        console.log("Opção inválida!");
        num = prompt(`Digite o ${i + 1}º número de 5: `);}
        numero.push(num);
  }

  let menornumero = numero[0];
  let maiornumero = 0;
  let totaldosnumeros = 0;

  numero.forEach((num) => {
  if (menornumero > num) menornumero = num;
  if (maiornumero < num) maiornumero = num;
  totaldosnumeros += parseFloat(num);
  });

  console.log(
    `Menor número: ${menornumero}
Maior número: ${maiornumero}
Soma dos números: ${totaldosnumeros}`
  );

console.log("Esperamos ter ajudado.:)")
