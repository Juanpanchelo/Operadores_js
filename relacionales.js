let resultadoIgualdad = 10 == "10"; // Output: true (ambos son 1
console.log("La relacion es:",resultadoIgualdad);
//Desigualdad ! Evalúa si dos operandos son diferentes en valor o tipo.
let resultadoDesigualdad = 15 != "15"; // Output: true (diferent
console.log("La relacion es:",resultadoDesigualdad);
//Menor que (<): Compara si un operando es menor que otro en valor numérico.
let resultadoMenorQue = 8 < 12; // Output: true
console.log("La relacion es:",resultadoMenorQue);
//Mayor que (>): Compara si un operando es mayor que otro en valor numérico.
let resultadoMayorQue = 20 > 10; // Output: true
console.log("La relacion es:",resultadoMayorQue);
//Menor o igual que (<=): Compara si un operando es menor o igual que otro en
//valor numérico.
let resultadoMenorOIgualQue = 15 <= 15; // Output: true
console.log("La relacion es:",resultadoMenorOIgualQue);
//Mayor o igual que (>=): Compara si un operando es mayor o igual que otro en
//valor numérico.
let resultadoMayorOIgualQue = 22 >= 20; // Output: true
console.log("La relacion es:",resultadoMayorOIgualQue);
//Validar la edad de un usuario
let edadUsuario = 18;
let edadMinima = 18;
if (edadUsuario >= edadMinima) {
console.log("El usuario es mayor o igual a la edad mínima");
} else {
console.log("El usuario no cumple con la edad mínima");
}
//Verificar si un número es par o impar
let numero = 15;
if (numero % 2 === 0) {
console.log("El número es par");
} else {
    console.log("El número es impar");
}
//Determinar si un estudiante ha aprobado un curso
let notaExamen = 75;
let notaMinimaAprobacion = 70;
if (notaExamen >= notaMinimaAprobacion) {
console.log("El estudiante ha aprobado el curso");
} else {
console.log("El estudiante no ha aprobado el curso");
};


