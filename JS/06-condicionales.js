"use strict"

// condicional if
// Si A es igual a B estonves haz esto

var edad1 = 80;
var nombre = "Daniel Ramos";

// operadores relacionales
// mayor: >
// Menos: <
// mayor o igual: >=
// menor o igual: <=
// Igual: ==
// distinto: !=

// s pasa esto ejecuta esto
if(edad1 >= 18){
    // es mayor de edad
    console.log(nombre+ " tiene " + edad1 + " años, es mayor de edad");
    if(edad1 <= 33){
        console.log("Todabia eres millenial")
    }else if(edad1 >= 70){
        console.log("Eres anciano")
    }else{
        console.log("ya no eres millenial")
    }
}else{
    // es menor de edad
    console.log(nombre+ " tiene " + edad1 + " años, es menor de edad")
}



// operadores logicos

// AND(Y): &&
// OR(O): ||
// Negacion: !


// negacion
var year = 2023;
if(year != 2020){
    console.log( "el años no es 2020,realmente es: " + year );
}

// AND 
if(year >= 2000 && year <= 2025 && year != 2023){
    console.log("Estamo en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

// OR 
if(year == 2008 || year >= 2023 && year == 2023 ){
    console.log("El año acaba en 23")
}else{
    console.log("Año no resgistrado")
}