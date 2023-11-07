"use strict"

/*
Que nos diga si un numero es par o impar 
1.- Ventana Promt
2.- Sino es valido que nos pida de nuevo el numero
*/

let numero = parseInt(prompt("Initroduce un numero",0));


while(isNaN(numero)){
    alert("Intruduce numeros correctos 'ERROR' ")
    numero = parseInt(prompt("Introduce un numero",0));
}

if(numero%2 == 0){
    console.log(numero)
    alert("El "+ numero + " es Par.")
}
else{
    alert("El "+ numero + " es Impar.")
}