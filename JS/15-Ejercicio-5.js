"use strict"

/*
Muestre todos los numeros divisores de un numero introducido en un prompt
*/


const numero = parseInt(prompt("Introduce un numero",1));

for( let i = 1; i <= numero ; i ++ ){
    // console.log(numero + " X " + i + " = " + (i*numero))
    // console.log(numero + " / " + i + " = " + (numero/i))
    // console.log(i*numero)
    if(numero%i == 0){
        console.log("Divisoror: " + i)
    }
}