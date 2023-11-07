" use strict"

// Switch

var edad = 77; 
var imprime = "";



switch(edad){
    case 18:
        imprime = "Acabas de ciumplir la mayoria de edad";
    break;

    case 25:
        imprime = "Ya eres adulto";
    break;

    case 40:
        imprime = "Crisis de los cuarenta";
    break;

    case 75:
        imprime = "Eres ya un anciano";
    break;
    default:
        imprime = "tu edad es neutra";
}   

console.log(imprime);
