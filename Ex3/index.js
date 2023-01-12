//3.	Escreva um algoritmo que solicite ao usuário que informe: quantidade atual em estoque, quantidade máxima em estoque e quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual a quantidade média exibir a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar compra'.

const promptSync = require ("prompt-sync"); 
const prompt = promptSync();

console.log("Olá, vamos fazer o controle de estoque!");

var emestoque =parseFloat(prompt("Escreva a quantidade do produto em estoque:"));
var maximoemestoque = parseFloat (prompt("Escreva qual a quantidade máxima do produto que pode ter no estoque:"));
var minimoemestoque = parseFloat (prompt("Escreva qual a quantidade minima que pode ter do produto no estoque:"));

while (
    (!emestoque && emestoque !=0) ||
    (!maximoemestoque && maximoemestoque !=0) ||
    (!minimoemestoque && minimoemestoque !=0)
)
{
    console.log("Valor inválido");
    emestoque =parseFloat(prompt("Escreva a quantidade do produto em estoque:"));
    maximoemestoque = parseFloat (prompt("Escreva qual a quantidade máxima do produto que pode ter no estoque:"));
    minimoemestoque = parseFloat (prompt("Escreva qual a quantidade minima que pode ter do produto no estoque:"));
}

var media = (maximoemestoque-minimoemestoque) /2;

(emestoque>=media)
    console.log("Não comprar o produto!")
    console.log("Comprar produto!");

console.log("Obrigado por consultar e volte sempre!")    