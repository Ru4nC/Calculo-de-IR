const prompt = require("prompt-sync")();

var nome = prompt("Digite seu nome: ");
var salario_bruto =
  parseFloat(prompt("Digite seu salário bruto: "));
var ir = salario_bruto * 10 / 100;
var salario_liquido = salario_bruto - ir;
console.log("Salário Liquido: R$", salario_liquido);