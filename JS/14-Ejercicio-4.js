"use strict"
/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

let numero1 = parseInt(prompt("Introduce el primer numero", 0));
let numero2 = parseInt(prompt("Introduce el segundo numero", 0));

document.write("<h2>De "+ numero1 + " a " + numero2 + " estan estos numeros: </h2>");

    for( let i = numero1; i <= numero2 ; i ++){
        if(i % 2 !== 0){
            document.write( i + "<br/>");
        }
        
    }