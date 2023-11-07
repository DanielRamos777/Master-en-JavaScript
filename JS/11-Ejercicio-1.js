"use strict"

// programa que pida dos numero y que nos diga cual es el mayor, elmenor y si son iguales
// PLUS: Si los numeros no son un numero o son menores o iguales a cero, nos lo vuelvaa pedir 


let numero1 = parseInt(prompt("Ingrese el primer numero", 0));
let numero2 = parseInt(prompt("Ingrese el segundo numero", 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2) ){
    alert("Intruduce numeros correctos 'ERROR' ")
    numero1 = parseInt(prompt("Ingrese el primer numero", 0));
    numero2 = parseInt(prompt("Ingrese el segundo numero", 0));
}

    if(numero1 == numero2){
        alert("el numero " + numero1 + " es igual al numero " + numero2 )
    }else if(numero1 > numero2){
        alert("el numero " + numero1 + " es mayor que el numero " + numero2 )
    }else if(numero1 < numero2){
        alert("el numero " + numero1 + " es menor que el numero " + numero2 )
    }