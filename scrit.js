var prompt = require('prompt-sync')();
// Solicitar los tres números al usuario y convertirlos a números
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));

// Verificar si los tres números son iguales
if (num1 === num2 && num1 === num3) {
    console.log("Los tres números son iguales:", num1);
} else {
    // Colocar los números en un array
    let numeros = [num1, num2, num3];

    // Ordenar de mayor a menor
    let ordenMayorAMenor = [...numeros].sort((a, b) => b - a);
    console.log("Números ordenados de mayor a menor:", ordenMayorAMenor);

    // Ordenar de menor a mayor
    let ordenMenorAMayor = [...numeros].sort((a, b) => a - b);
    console.log("Números ordenados de menor a mayor:", ordenMenorAMayor);
    
    // Identificar el número mayor, intermedio y menor
    let mayor = ordenMayorAMenor[0];
    let medio = ordenMayorAMenor[1];
    let menor = ordenMayorAMenor[2];
    
    console.log("Número mayor:", mayor);
    console.log("Número del medio:", medio);
    console.log("Número menor:", menor);
}
