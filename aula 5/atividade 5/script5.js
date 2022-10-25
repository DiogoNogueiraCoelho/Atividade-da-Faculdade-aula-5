let valor, cod, jurosDeb, jurosCred, jurosCred2, jurosDeb2, desconto;


valor = parseInt(prompt("Digite o valor da compra:"));

cod = prompt("Digite a forma de pagamento (1-Á vista   2-Débito   3-Crédito)");

jurosCred = 0.07;
jurosCred2 = valor * jurosCred;

jurosDeb = 0.02;
jurosDeb2 = valor * jurosDeb;


desconto = 0.9

if (cod == 1){
    console.log("valor real do produto:"+ valor + ",valor com o desconto:" + valor * desconto);
}

else if (cod == 2){
    console.log("valor real do produto:"+ valor + ",valor com os juros:" + (valor + jurosDeb2));
}

else if (cod == 3){
    console.log("valor real do produto:"+ valor + ",valor com os juros:" + (valor + jurosCred2));
}

else {
    console.log("código inválido");
}