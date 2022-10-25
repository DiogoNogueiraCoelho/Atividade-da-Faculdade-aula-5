let valor = prompt("Quanto deu o valor da compra?");



let parcela = prompt("Vai ser quantas parcelas? (de 1 até 4, exceto 3):");


if (parcela == 1){
    alert("Valor pago á vista, total de " + valor + "R$.");
}

else if (parcela == 2){
    alert("Valor parcelado em 2 vezes, total de " + valor/2 + " R$ cada parcela.");
}

else if(parcela == 4){
    alert("Valor parcelado em 4 vezes, total de " + valor/4 + " R$ cada parcela.");
}

else{
    alert(" quantia de parcelas inválida, digite um número de parcelas disponível:");
}