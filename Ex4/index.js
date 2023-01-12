//4.	Escreva um algoritmo que permita que o professor digite as notas da 1a. e 2a. avaliações de vários alunos, um aluno de cada vez. calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. Após apresentar a media calculada, o algoritmo deverá perguntar se o professor deseja continuar calculando a media para outros alunos. Se a resposta for ‘SIM’, o algoritmo continua, caso contrário, o algoritmo finaliza.

const promptSync = require ("prompt-sync"); 
const prompt = promptSync();

console.log("Olá, vamos calcular a média de varios alunos!");

  let refazer = "sim";

  while (refazer.toLowerCase() != "nao") {
    let totaldealunos = parseFloat(prompt("Quantos alunos deseja calcular a média? "));
    while (!totaldealunos) {
      console.log("Valor inválido!");
      totaldealunos = parseFloat(prompt("Quantos alunos deseja calcular a média? "));
    }

    let alunos = [];

    for (let i = 0; i < totaldealunos; i++) {
      let nome = prompt(
        `Digite o nome do ${i + 1}º aluno: `
      );

      let nota1 = parseFloat(prompt("Digite a nota 1: "));
      let nota2 = parseFloat(prompt("Digite a nota 2: "));

      while (
        ( (!nota1 && nota1 != 0) || (nota1 < 0 || nota1 > 10) ) ||
        ( (!nota2 && nota2 != 0) ||
        (nota2 < 0 || nota2 > 10) )
      ) {
        console.log("Alguma opção inválida");

        nota1 = parseFloat(prompt("Digite a nota 1: "));
        nota2 = parseFloat(prompt("Digite a nota 2: "));
      }

      let media = (nota1 + nota2) / 2;

      alunos.push({
        nome: nome,
        nota1,
        nota2,
        media: media,
      });
    }

    alunos.forEach((estudante) => {
      console.log(`Nome: ${estudante.nome}, Média: ${estudante.media}`);
    });

    refazer = prompt("Deseja calcular outras médias? ( sim/nao ): ");
  }

console.log("Esperamos ter ajudado! :)")