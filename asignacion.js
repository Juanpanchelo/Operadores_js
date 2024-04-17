//Asignación simple (=): Asigna un valor a una variable.
let nombre = "Juan";
let edad = 25;
//Asignación compuesta (+=, -=, =, /=): Realiza una operación matemática y
//asigna el resultado a una variable.
let numero = 10;
numero += 5; // numero = 15
numero -= 3; // numero = 12
numero *= 2; // numero = 24
numero /= 4; // numero = 6
//Asignación de incremento/decremento (++/--): Incrementa o decrementa el
//valor de una variable en 1.
//Ejemplos
let contador = 0;
contador++; // contador = 1
contador--; // contador = 0
//Comportamiento y precedencia:
//Los operadores de asignación se evalúan de derecha a izquierda.
//La asignación simple ( = ) tiene mayor precedencia que las asignaciones
//compuestas ( += , = , = , /= ).
//Los incrementos/decrementos ( ++ , - ) tienen mayor precedencia que las
//asignaciones compuestas.
//Ejemplos prácticos:
//Calcular el total de una compra
let precioProducto = 10;
let cantidadProducto = 3;
let totalCompra = precioProducto * cantidadProducto;
console.log("Total de la compra:", totalCompra);
//Acumular puntos en un juego
let puntosJugador = 0;
puntosJugador += 100; // Por ganar un nivel
puntosJugador -= 20; // Por perder una vida
console.log("Puntos del jugador:", puntosJugador);
//Ajustar el volumen de un reproductor de música
let volumen = 50;
volumen++; // Aumentar volumen
volumen--; // Disminuir volumen
console.log("Volumen actual:", volumen);


