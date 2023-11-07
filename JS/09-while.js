"use strict"

// Bucle While

let year = 2023;

while( year != 2000){
    // ejecuta esto
    console.log("estamos en el año: " + year );
    year --;

    if(year == 2000){
        break;
    };
}



// Do While

let years = 30;

do{
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    years --;
}while(years >= 25)