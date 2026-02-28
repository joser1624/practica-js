/*
Clase 21 - Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=6565
*/

// Strings (cadenas de texto)

// Concatenación

let myName = "Brais"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[11])

// Métodos comunes

console.log(greeting.toUpperCase()) // Mayúsculas lo que hace es devolver una nueva cadena con todas las letras en mayúsculas, no modifica la cadena original
console.log(greeting.toLowerCase()) // Minúsculas lo que hace es devolver una nueva cadena con todas las letras en minúsculas, no modifica la cadena original
console.log(greeting.indexOf("Hola")) // Índice lo que hace es devolver el índice de la primera aparición de la subcadena especificada, o -1 si no se encuentra
console.log(greeting.indexOf("Brais")) // Índice lo que hace es devolver el índice de la primera aparición de la subcadena especificada, o -1 si no se encuentra
console.log(greeting.indexOf("MoureDev")) // Índice lo que hace es devolver el índice de la primera aparición de la subcadena especificada, o -1 si no se encuentra)
console.log(greeting.includes("Hola")) // Incluye --> lo que hace es devolver true si la cadena contiene la subcadena especificada, o false si no
console.log(greeting.includes("Brais")) // lo que hace es devolver true si la cadena contiene la subcadena especificada, o false si no
console.log(greeting.includes("MoureDev")) // lo que hace es devolver true si la cadena contiene la subcadena especificada, o false si no
console.log(greeting.slice(0, 10)) // lo que hace es devolver una nueva cadena que es una porción de la cadena original, desde el índice de inicio hasta el índice de fin (excluyendo el índice de fin)
console.log(greeting.replace("Brais", "MoureDev")) // Reemplazo lo que hace es devolver una nueva cadena con la primera aparición de la subcadena especificada reemplazada por la nueva subcadena, no modifica la cadena original
console.log(greeting.replace("Hola", "Adiós")) // Reemplazo lo que hace es devolver una nueva cadena con la primera aparición de la subcadena especificada reemplazada por la nueva subcadena, no modifica la cadena original
console.log(greeting.replace("MoureDev", "Adiós")) // Reemplazo lo que hace es devolver una nueva cadena con la primera aparición de la subcadena especificada reemplazada por la nueva subcadena, no modifica la cadena original
//lo que hace el método replace es devolver una nueva cadena con la primera aparición de la subcadena especificada reemplazada por la nueva subcadena, no modifica la cadena original, si la subcadena especificada no se encuentra en la cadena original, devuelve la cadena original sin cambios 
console.log(greeting.substring(0, 10)) // Subcadena lo que hace es devolver una nueva cadena que es una porción de la cadena original, desde el índice de inicio hasta el índice de fin (excluyendo el índice de fin)
console.log(greeting.split(" ")) // División lo que hace es devolver un array de subcadenas, divididas por el separador especificado
console.log(greeting.split("")) // División lo que hace es devolver un array de subcadenas, divididas por el separador especificado
console.log(greeting.trim()) // Eliminación de espacios en blanco lo que hace es devolver una nueva cadena con los espacios en blanco eliminados al principio y al final, no modifica la cadena original

//los comandos mas importantes son: toUpperCase, toLowerCase, indexOf, includes, slice, replace, substring, split y trim

// Template literals (plantillas literales)

// Strings en varias líneas
let message = `Hola, este
es mi
curso de
JavaScript`
//lo que hace la comilla invertida es permitirnos escribir strings en varias líneas sin necesidad de usar caracteres especiales como \n para indicar un salto de línea, además de permitir la interpolación de valores con ${} y también nos permite escribir comillas simples y dobles sin necesidad de escaparlas con \
console.log(message)

// Interpolación de valores
//en ingles se le llama string interpolation, lo que hace es permitirnos insertar variables o expresiones dentro de una cadena de texto utilizando la sintaxis ${}, lo que hace que el código sea más legible y fácil de escribir, además de evitar errores de concatenación y mejorar la legibilidad del código.
let email = "braismoure@mouredev.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)
//la interpolación de valores lo que hace es permitirnos insertar variables o expresiones dentro de una cadena de texto utilizando la sintaxis ${}, lo que hace que el código sea más legible y fácil de escribir, además de evitar errores de concatenación y mejorar la legibilidad del código.

//algunas de las ventajas de usar template literals son: permiten escribir strings en varias líneas, facilitan la interpolación de valores, mejoran la legibilidad del código y evitan errores de concatenación.
//otras cosas que se pueden hacer con template literals son: crear strings dinámicos, generar HTML dinámico, crear mensajes de error personalizados, entre otras cosas.
//un template literal es una forma de escribir strings en JavaScript que permite incluir variables y expresiones dentro de la cadena de texto utilizando la sintaxis ${}, lo que hace que el código sea más legible y fácil de escribir, además de evitar errores de concatenación y mejorar la legibilidad del código.

//algunas cosas mas que se pueden hacer con los strings son: convertir un número a string con el método toString(), convertir un string a número con el método parseInt() o parseFloat(), obtener el carácter en una posición específica con el método charAt(), obtener el código ASCII de un carácter con el método charCodeAt(), entre otras cosas.


//ejemplo cambiar todos los espacios vacios por guines:
let text = "Hola, este es un texto con espacios vacíos."
let newText = text.replace(/ /g, "-") //lo que hace el método replace con la expresión regular / /g es reemplazar todos los espacios vacíos por guiones, el modificador g indica que se deben reemplazar todas las apariciones de la subcadena especificada, no solo la primera
console.log(newText)
//siempre es //g para reemplazar todas las apariciones de la subcadena especificada, si no se pone el modificador g, solo se reemplazará la primera aparición de la subcadena especificada.
//ejemplo comprobar si una cadena de texto contiene una palabra concreta:
let word = "texto"
console.log(text.includes(word)) //lo que hace el método includes es devolver true si la cadena contiene la subcadena especificada, o false si no
//ejemplo comprobar si dos strings son iguales:
let string1 = "Hola"
let string2 = "Hola"
let string3 = "Adiós"   
console.log(string1 === string2) //lo que hace el operador de igualdad estricta === es comparar dos valores y devolver true si son iguales en valor y tipo, o false si no
console.log(string1 === string3) //lo que hace el operador de igualdad estricta === es comparar dos valores y devolver true si son iguales en valor y tipo, o false si no
//ejemplo comprobar si dos strings tienen la misma longitud:
console.log(string1.length === string2.length) //lo que hace el operador de igualdad estricta === es comparar dos valores y devolver true si son iguales en valor y tipo, o false si no
console.log(string1.length === string3.length) //lo que hace el operador de igualdad estricta === es comparar dos valores y devolver true si son iguales en valor y tipo, o false si no
//la comprovacion se hace con 3= porque el operador de igualdad estricta === compara dos valores y devuelve true si son iguales en valor y tipo, o false si no, mientras que el operador de igualdad == compara dos valores y devuelve true si son iguales en valor, pero no necesariamente en tipo, lo que puede llevar a resultados inesperados debido a la coerción de tipos en JavaScript. Por eso es recomendable usar siempre el operador de igualdad estricta === para evitar errores y mejorar la legibilidad del código.

//ejemplo:
/**let texto = "hola hola hola";

console.log(texto.replace(/hola/g, "adios"));
// "adios adios adios" */