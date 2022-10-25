let num1, num2;

num1 = prompt("Digite um número");

num2 = prompt("Digite o segundo número");

if(num1 > num2){
    alert(num1 + " é maior que " + num2);
}

else if (num1 == num2){
    alert("os números são iguais")
}

else {
    alert(num2 + " é maior que " + num1);
}