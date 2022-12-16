var numero1 = parseInt(prompt("Digite um número: "));
var numero2 = parseInt(prompt("Digite um número: "));
var soma = numero1 + numero2;

if (soma > 10) {
    alert("A soma dos valores é maior que 10");
} else if (soma == 10) {
    alert("A soma dos valores é igual a 10");
} else if (soma < 10) {
    alert("A soma dos valores é menor que 10")
}