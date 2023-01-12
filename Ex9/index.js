//9.	Escrever um algoritmo que lê uma quantidade não informada de dados de pessoas que estão sendo monitoradas no posto de saúde. Para cada pessoa é anotada o sexo (M ou F) e a altura (em metros), que é fornecida via teclado, sendo que a altura igual a zero informa o final da leitura. Armazenar as informações em vetores e posteriormente, calcule e escreva: 

const promptSync = require ("prompt-sync"); 
const prompt = promptSync();

console.log("Olá, compare e monitore os pacientes!");

  let paciente = [];
  let numerodepacientes = parseFloat(prompt("Quantos pacientes estão sendo monitorados? "));

  while (!numerodepacientes && numerodepacientes != 0) 
 {
    console.log("Opção inválida!");
    numerodepacientes = parseFloat(prompt("Quantos pacientes estão sendo monitorados? "));
  }

  for (let i = 0; i < numerodepacientes; i++) {
    let nomedopaciente = prompt(`Digite o nome do ${i + 1}° paciente: `);
    let sexoodopaciente = prompt(`Digite o sexo do ${i + 1}° paciente (M/F): `);
    let alturadopaciente = parseFloat(prompt(`Digite a altura do ${ i + 1}° paciente : `));

    while (
      ( (!sexoodopaciente) ||( sexoodopaciente.toUpperCase() != "M" && sexoodopaciente.toUpperCase() != "F" ) ) ||( (!alturadopaciente) )) 
      {
        console.log("\nAlguma opção inválida!\n");
        sexoodopaciente = prompt(`Digite o sexo do ${i + 1}° paciente (M/F): `);
        alturadopaciente = parseFloat(prompt(`Digite a altura do ${i + 1}° paciente: `));
    };

    paciente.push({
      nome: nomedopaciente,
      sexo: sexoodopaciente.toUpperCase(),
      altura: alturadopaciente,
    });
  }
  paciente.push({
    nome: "fim",
    sexo: undefined,
    altura: 0,
  });
  console.table(paciente);

  let pacientemulheres = 0;
  let alturadasmulheres = 0;
  let mediadaalturadasmulheres;
  let pacientehomem = 0;
  let homenscompoucaaltura = "Não há paciente homem!";
  let maioraltura = 0;

  paciente.forEach((paciente) => {
    if (paciente.sexo == "F") {
      pacientemulheres++
      alturadasmulheres += paciente.altura;
    } else if (paciente.sexo == "M") {
      pacientehomem++;
      if (homenscompoucaaltura == "Não há paciente homem!")
        homenscompoucaaltura = paciente.altura;
      if (homenscompoucaaltura > paciente.altura) 
        homenscompoucaaltura = paciente.altura;
    }
    if(maioraltura < paciente.altura) maioraltura = paciente.altura;
  });

  if(pacientemulheres == 0) {
    mediadaalturadasmulheres = "Não há paciente mulher!";} 
    else {mediadaalturadasmulheres = alturadasmulheres / pacientemulheres;}

  console.log(
     `Maior Altura: ${maioraltura}
Média da altura entre as mulheres: ${mediadaalturadasmulheres}
Quantidade de homens: ${pacientehomem}
Menor altura entre os homens: ${homenscompoucaaltura}`
 );

 