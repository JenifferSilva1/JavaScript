function comissao() {

    let salarioFixo = parseInt(prompt("Informe seu salário: "));
    let vendas = parseInt(prompt("Informe o valor das vendas: "));

    var comissao1 = ((vendas * 3 / 100) + salarioFixo + vendas)
    var comissao2 = ((vendas * 5 / 100) + salarioFixo + vendas)

    if (vendas <= 1500) {

        alert("Você vendeu menos que R$1.500,00, então seu salário com acréscimo de 3% é igual a: " + comissao1)

    } else {
        alert("Você vendeu R$1.500,00 ou mais, então seu salário com acréscimo de 5% é igual a: " + comissao2)
    }


}