function soma(){
    // cria caixa de texto para receber um valor
    // parseInt torna o número inteiro e deixa de somar strings
    var numero1=parseInt(prompt("Digite um número :"));
    var numero2=parseInt(prompt("Digite um número. :"));
    var soma =numero1+numero2;
    alert("O valor da soma é :"+soma);
}