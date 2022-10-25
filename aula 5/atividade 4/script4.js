let num1, num2, num3, media;

num1 = prompt("Digite a primeira nota (de 0 até 10)");

num1 = eval(num1);

num2 = prompt("Digite a segunda nota");

num2 = eval(num2);

num3 = prompt("Digite a terceira nota");

num3 = eval(num3);

media = (num1 + num2 + num3)/3;

if(media >= 6){
    alert("Aprovado")
}

else if(media < 3){
    alert("reprovado")
}

else{
    alert("exame")
}