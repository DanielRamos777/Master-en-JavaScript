"use strict"

// Funciones
// Una uncion es una agrupacion reutilizable de un conjunto de instrucciones

// Defino la funcion 

function porConsola(numero1, numero2){
        console.log("Suma: "+ (numero1+numero2));
        console.log("Resta: "+ (numero1-numero2));
        console.log("Multiplicacion: "+ (numero1*numero2));
        console.log("Divicion: "+ (numero1/numero2));
        console.log("---------------------")
        return "Hola soy la calculadora!!";
}

function porPantalla(numero1,numero2){
        document.write("Suma: "+ (numero1+numero2)+"</br>");
        document.write("Resta: "+ (numero1-numero2)+"</br>");
        document.write("Multiplicacion: "+ (numero1*numero2)+"</br>");
        document.write("Divicion: "+ (numero1/numero2)+"</br>");
}

function calculadora(numero1, numero2, mostrar = false){
    // conjunto de instrucciones a ejecutar
    if(mostrar == false){
        porConsola(numero1,numero2);

    }else{
        porPantalla(numero1,numero2);
    }
    return true;
}
// Invocar a llamar a la funcion 
calculadora(1,4);
calculadora(2,5, true);
calculadora(10,20, true);

// for(let i=1; i<= 10; i++){
//     console.log(i);
//     calculadora(i,7)
// }

// ---------------------------------

