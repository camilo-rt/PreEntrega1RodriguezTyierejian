let operacion = prompt("¿Que desea hacer? 1-sumar 2-restar 3-multiplicar 4-dividir.")
let num1;
let num2;
let resultado;

//impedir que se pueda hacer la operacion sin un numero valido

if (operacion >= 1 && operacion <=4) {
    num1 = parseInt(prompt("ingrese el primer numero"))
    num2 = parseInt(prompt("ingrese el segundo numero"))
}

//funcion suma
function sumar (num1, num2) {
    return num1 + num2;
}

//funcion resta
function restar (num1, num2){
    return num1 - num2;
}

//funcion multiplicar
function multiplicar (num, num2) {
    return num1 * num2;
}

//funcion dividir
function dividir(num1, num2) {
    if (num2 === 0) {
        return "Error: No es posible dividir entre cero.";
    }else 
        return num1 / num2;
}

switch (operacion) {
    case "1":
    resultado = sumar(num1, num2);
        document.write("El valor de la suma es: " + resultado);
        break;

    case "2":
    resultado = restar(num1, num2);
        document.write("El valor de la resta es: " + resultado);
        break;

    case "3":
    resultado = multiplicar(num1, num2);
        document.write("El valor de la multiplicacion es: " + resultado);
        break;
            

    case "4":
    resultado = dividir(num1, num2);
        document.write("El valor de la division es: " + resultado);
        break;

default:
    alert("La opcion especificada no es correcta")
    break;
}

