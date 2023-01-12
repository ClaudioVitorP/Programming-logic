//6.	Escrever um algoritmo que lê a quantidade informada de pessoas que não estão sendo monitoradas no posto de saúde. Para cada pessoa é anotada o peso e a altura (em metros), que é fornecida pelo usuário, sendo que o peso igual a zero informa o final da leitura. Calcule e escreva: 

const promptSync = require ("prompt-sync"); 
const prompt = promptSync();

console.log("Seja bem-vindo ao monitoramento do posto de saúde.");

let pessoas = [];

  let totaldepessoas = parseFloat(prompt("Informe a quantidade de pessoas que não estão sendo monitoradas: "));

  while (!totaldepessoas && totaldepessoas != 0) {
    console.log("Opção inválida!");

    totaldepessoas = parseFloat(prompt("Informe a quantidade de pessoas que não estão sendo monitoradasÇ "));
  }

  for (let i = 0; i < totaldepessoas; i++) {
    let nome = prompt(`Digite o NOME do ${i + 1}º paciente: `);
    let pesodapessoa;
    let alturadapessoa;
    let refazer = false;

    do {pesodapessoa = parseFloat(prompt(`Digite o peso do ${i + 1}° paciente Kg: `));

        alturadapessoa = parseFloat(prompt( `Digite a altura do ${ i + 1}° paciente em metros: `));

      if (!pesodapessoa || !alturadapessoa) {
        console.log("Alguma opção inválida!");
      } 
      else {
        refazer = true;
      }
    } while (!refazer);

    pessoas.push({
      name: nome,
      peso: pesodapessoa,
      altura: alturadapessoa,
    });
  }
  pessoas.push({
    name: "fim",
    peso: 0,
    altura: 0,
  });
  console.table(pessoas);

  let alturamenor = pessoas[0].altura;
  let alturamaior = 0;
  let totaldopeso = 0;
  let mediadospesos;

  pessoas.forEach((pessoas) => {
    if (pessoas.peso != 0) {
      if (alturamenor > pessoas.altura) alturamenor = pessoas.altura;
      if (alturamaior < pessoas.altura) alturamaior = pessoas.altura;
      totaldopeso += pessoas.peso;
    }
  });
  mediadospesos = totaldopeso / totaldepessoas;

  console.log(
` Menor altura: ${alturamenor}
 Maior Altura: ${alturamaior}
 Média dos pesos: ${mediadospesos}`
  );

