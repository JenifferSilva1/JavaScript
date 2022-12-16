function areatrapezio(){
    var basemaior=parseInt(prompt("Informe o valor da base maior do trapézio: "));
    var basemenor=parseInt(prompt("Informe o valor da base menor do trapézio: "));
    var altura=parseInt(prompt("Informe a altura do trapézio: "))
    var areatrapezio=(basemaior+basemenor)*altura/2;
    prompt("A área do trapézio é igual a: "+areatrapezio);
}