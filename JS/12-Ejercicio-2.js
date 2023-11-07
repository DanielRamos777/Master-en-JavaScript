"use strict"
/*
Utilizando un nucle, mostrar la suma y la media de los mumeros introducidos hasta
introducir un numero negativo y ahi mostrar el resultado
*/

let suma = 0;
let contador = 0;
let numero = 0;

do{
    numero = parseInt(prompt("Introduce numeros hasta que metas un numero negativo", 0 ));

    if(isNaN(numero)){
        numero = 0;

    }else if(numero > 0){
        suma = suma + numero;
        // suma += numero;
        contador ++;
    }

    console.log(suma);
    console.log(contador);

}while(numero >= 0)


alert("La suma de todos los numeros es: " + suma );
alert("La media de todos los numeros es: " + (suma/contador))