/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let a = 'Yo';
let b = a + ' soy campeon' + '!';
console.log(b);
// 2. Muestra la longitud de una cadena de texto
console.log(b.length);
// 3. Muestra el primer y último carácter de un string
console.log(b[0]);
console.log(b[14])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(b.toUpperCase());
console.log(b.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let c = `Hola, soy jose
y
soy 
un 
ganador`
console.log(c)
// 6. Interpola el valor de una variable en un string
let j='jose'
console.log(`hola, soy ${j} y ${a.toLowerCase()}, ${b.toLowerCase()}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(b.replace( / /g,'-'))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(b.includes('ganador'))
// 9. Comprueba si dos strings son iguales
console.log(a===b);
// 10. Comprueba si dos strings tienen la misma longitud
let d= 'me quiero mucho'
let e= 'soy un campeonn'
console.log( d.length===e.length );

/* 1. Concatenar cadenas
let a = 'Yo';
let b = a + ' soy campeon' + '!';
console.log(b);

✔ BIEN

Resultado:
"Yo soy campeon!"

2. Longitud del string
console.log(b.length);

✔ BIEN

Cuenta todos los caracteres incluyendo espacios y !

3. Primer y último carácter
console.log(b[0]);
console.log(b[14])

⚠ CASI BIEN (pero mala práctica)

Funciona SOLO porque sabes cuánto mide el texto.
Si cambias la frase → se rompe.

🔧 Corrección correcta:

console.log(b[0]);
console.log(b[b.length - 1]);
4. Mayúsculas y minúsculas
console.log(b.toUpperCase());
console.log(b.toLowerCase());

✔ BIEN

5. String multilínea
let c = `Hola, soy jose
y
soy 
un 
ganador`
console.log(c)

✔ BIEN (uso correcto de template string)

6. Interpolación
let j='jose'
console.log(`hola, soy ${j} y ${a.toLowerCase()}, ${b.toLowerCase()}`)

✔ BIEN

7. Reemplazar espacios por guiones
console.log(b.replace( / /g,'-'))

✔ BIEN

(Usaste correctamente la expresión regular global)

8. Contiene una palabra
console.log(b.includes('ganador'))

❌ MAL

Tu string es:

"Yo soy campeon!"

No contiene "ganador" → siempre dará false

🔧 Corrige por:

console.log(b.includes('campeon'))
9. Strings iguales
console.log(a===b);

✔ BIEN

Comparas "Yo" con "Yo soy campeon!" → false

10. Misma longitud
let d= 'me quiero mucho'
let e= 'soy un campeonn'
console.log( d.length===e.length );

✔ BIEN

La lógica está correcta.

Resumen
Ejercicio	Estado
1	✔ Correcto
2	✔ Correcto
3	⚠ Mejorable
4	✔ Correcto
5	✔ Correcto
6	✔ Correcto
7	✔ Correcto
8	❌ Incorrecto
9	✔ Correcto
10	✔ Correcto */