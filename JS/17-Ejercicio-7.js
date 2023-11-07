"use strict"

// Tabla de multplicar de un numero introducido por pantalla
const numero = parseInt(prompt("Introduce un numero",1));

document.write("<h1>Tabla del "+ numero +"</h1>")
for( let i = 1; i <= 12 ; i ++ ){
    document.write( numero + " X " + i + " = " + (i*numero) + "<br/>")
    console.log(numero + " X " + i + " = " + (i*numero))
    }

    // Totas las tablas de multiplicar
for( let c = 1; c <= 12 ; c ++ ){
    document.write("<h1>Tabla del "+ c +"</h1>")
    for( let i = 1; i <= 12 ; i ++ ){
        document.write( c + " X " + i + " = " + (i*c) + "<br/>")
        }
}