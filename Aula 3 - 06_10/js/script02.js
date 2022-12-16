var numero = parseInt(prompt("Digite um número: "));
var contadora = 1;
while (contadora <= 10) {
    document.write(numero + "*" + contadora + "=" + contadora * numero + "</br>"); 
    contadora++;
}

//document.write(numero + "*" + contadora + "=" ---- como se estivesse escrevendo a conta - ex: 3*1=
// "=" + contadora * numero + "</br>"); ---- resolução da conta