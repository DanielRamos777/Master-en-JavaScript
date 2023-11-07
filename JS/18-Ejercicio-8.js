"use strict"
/*
calculadora:
-pida dos numeros por pantalla
-si metemos uno mal que nos los vuelva a pedir
-en el cuerpo de la pagina, en una alerta y por la consola el resultado de  
sumar, restar, multiplicar y dividir esas dos cifras 
*/

let numero1 = parseInt(prompt("Introduce el primer numero", 0));
while(isNaN(numero1)){
    alert("Intruduce numeros correctos 'ERROR' ")
    numero1 = parseInt(prompt("Introduce el primer numero", 0));
}

let numero2 = parseInt(prompt("Introduce el segundo numero", 0));
while(isNaN(numero2)){
    alert("Intruduce numeros correctos 'ERROR' ")
    numero2 = parseInt(prompt("Introduce el segundo numero", 0));
}


let resultado = "La suma es: "+(numero1+numero2)+"</br>"+
                "La resta es: "+(numero1-numero2)+"</br>"+
                "La multiplicacion es: "+(numero1*numero2)+"</br>"+
                "La divicion es: "+(numero1/numero2)+"</br>";

let resultadoCMD = "La suma es: "+(numero1+numero2)+ "\n" +
                    "La resta es: "+(numero1-numero2)+"\n" +
                    "La multiplicacion es: "+(numero1*numero2)+"\n" +
                    "La divicion es: "+(numero1/numero2);"\n" 

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD)



