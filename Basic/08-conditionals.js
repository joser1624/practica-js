/*
Clase 23 - Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=7277
*/

// if, else if, else

// if (si)

let age = 37

if (age == 37) {
    console.log("La edad es 37")
}



// else (si no)

if (age == 37) {
    console.log("La edad es 37")
} else {
    console.log("La edad no es 37")
}

// else if (si no, si)

if (age == 37) {
    console.log("La edad es 37")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 37 ni es menor de edad")
}

// Operador ternario

const message = age == 37 ? "La edad es 37" : "La edad no es 37"
console.log(message)
//message es la asignación de una variable que se le asigna el valor de "La edad es 37" 
// si la condición age == 37 es verdadera, o "La edad no es 37" si la condición es falsa, 
// lo que hace el operador ternario es evaluar la condición y devolver uno de los dos valores 
// dependiendo de si la condición es verdadera o falsa, lo que hace que el código sea más conciso y
//  fácil de leer en comparación con un bloque if-else tradicional.

let day = 3
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Número de día incorrecto"
}

console.log(dayName)