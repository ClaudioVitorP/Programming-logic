//5.	A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de indústrias que são altamente poluentes do meio ambiente. O índice de poluição aceitável varia de 0,05 até 0,25. Se o índice sobe para 0,3 as indústrias do 1º grupo são intimadas a suspenderem suas atividades, se o índice crescer para 0,4 as industrias do 1º e 2º grupo são intimadas a suspenderem suas atividades, se o índice atingir 0,5 todos os grupos devem ser notificados a paralisarem suas atividades. Escreva um algoritmo que solicite ao usuário que informe o índice de poluição medido e emita a notificação adequada aos diferentes grupos de empresas. 

const promptSync = require ("prompt-sync"); 
const prompt = promptSync();

console.log("Seja bem-vindo, notifique e desligue quando a poluição estiver elevada.");

let ipoluicao = parseFloat(prompt("Digite qual o indice de poluição:"));

while(!ipoluicao && ipoluicao !=0){console.log("Valor incorreto")} 

ipoluicao >= 0.5
? console.log(
    "Todos os grupos devem ser notificados a paralisarem suas atividades. "
  )

: ipoluicao >= 0.4
? console.log(
    "As industrias do 1º e 2º grupo devem ser intimadas a suspenderem suas atividades."
  )

: ipoluicao >= 0.3
? console.log(
    "As indústrias do 1º grupo devem ser intimadas  a  suspenderem  suas  atividades."
  )

: console.log(
    "O índice está aceitavel, continue cuidando e nos ajude a manter o meio ambiente da melhor forma."
  );

  console.log("Obrigado por consultar em nosso sistema! :)")
