var soma = function(a,b){
    return a + b;
}

var subtracacao = function(a,b){
    return a - b;
}

var multi = function(a,b){
    return a * b;
}

var divisao = function(a,b){
    return a/b;
}

var num1 = prompt("Digite o primeiro numero: ");

var num2 = prompt("Digite o segundo numero");

console.log("1.Somar \n 2.Subtrair \n 3.Multiplicar \n 4.Dividir");

var opcao = Number(prompt("Digite a opcção. "));

if(opcao == 1){

    console.log("A soma dos números é: "+ soma(num1,num2));

} else if(opcao == 2){

    console.log("A subtração dos números é: "+ subtracacao(num1,num2));

} else if(opcao == 3){

    console.log("A multiplicação dos números é: "+ multi(num1,num2));

} else if(opcao == 4){

    console.log("A divisão dos números é: "+ divisao(num1,num2));

} else{
     
    console.log("número invalido!!!!");
}