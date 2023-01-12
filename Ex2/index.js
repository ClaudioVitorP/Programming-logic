//2.	Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.

const promptSync = require ("prompt-sync"); 
const prompt = promptSync();

console.log("Olá, calcule agora seu salário!");
console.log("Aviso: Todos os numeros com casas decimais devemos colocar o . no lugar de , .");

var salariof = parseFloat (prompt("Digite o valor do seu salário fixo?"));

var carrosvendidos = parseFloat (prompt("Digite quantos carros foram vendidos no mes:"));

var valordasvendas = parseFloat (prompt("Digite o valor total de suas vendas?"));

while (
    (!salariof && salariof !=0) ||
    (!carrosvendidos && carrosvendidos !=0) ||
    (!valordasvendas && valordasvendas !=0)
)

{
    console.log("Valor inválido!")
    salariof = parseFloat(prompt("Digite o valor do seu salário fixo?"));
    carrosvendidos = parseFloat(prompt("Digite quantos carros foram vendidos no mes:"));
    valordasvendas = parseFloat(prompt("Digite o valor total de suas vendas?"));
}

var salariototal = salariof + (valordasvendas * 0.05);

console.log(`O numero de carros vendidos foi:${carrosvendidos}`);
console.log(`O valor total de suas vendas é: R$${valordasvendas}`);
console.log(`Seu salário total é: R$${salariototal}`);

console.log("Agradecemos a sua visita! :)");

