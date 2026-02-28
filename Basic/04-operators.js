/*
Clase 19 - Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=4937


// Operadores Aritméticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// Operadores de asignacion

let myVariable = 2
console.log(myVariable)
myVariable += 2 // Suma con asignación
console.log(myVariable)

myVariable -= 2 // Resta con asignación
myVariable *= 2 // Multiplicación con asignación
myVariable /= 2 // División con asignación
myVariable %= 2 // Módulo con asignación
myVariable **= 2 // Exponente con asignación

// Operadores de comparación

console.log(a > b) // Mayor que
console.log(a < b) // Menor que
console.log(a >= b) // Mayor o igual que
console.log(a <= b) // Menor o igual que
console.log(a == b) // Igualdad por valor
console.log(a == 6)
console.log(a == "6")
console.log(a == a)
console.log(a === a) // Igualdad por identidad (por tipo y valor) o igualdad estricta
console.log(a === 6)
console.log(a === "6")
console.log(a != 6) // Desigualdad por valor
console.log(a !== "6") // Desigualdad por identidad (por tipo y valor) o desigualdad estricta
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

/*
Truthy values (valores verdaderos)

- Todos los numeros positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacías
- El boolean true
*/

/*
Falsy values (valores falsos)

- 0
-  0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacías 


// Operadores lógicos

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios

const isRaining = false
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo") */


/////yoooooooooooooooooooooooooooooooo///////////////////////


let edad = 5
let año = 2
console.log(edad, año) // Operadores Aritméticos
console.log(edad+año)   // Suma
console.log(edad-año)   // Resta
console.log(edad*año)   // Multiplicación    
console.log(edad/año)  // División
console.log(edad%año)  // Módulo
console.log(edad**año) // Exponente

let a=1;
a++;  //resulta 2
console.log(a)
a--; //resulta 1
console.log(a)

let b=4;
b/=2; //resulta 2
console.log(b)

let c=5;
c%=2; //resulta 1 , es como decir c= modulo de 5 entre 2, el resultado es el resto de la división, que es 1
console.log(c)

console.log('comparación de 5 y 10');
let x= 5;
let y= 10;
console.log(x>y);// Mayor que
console.log(x<y);// Menor que
console.log(x>=y);// Mayor o igual que
console.log(x<=y);// Menor o igual que
// igualdad por valor

console.log('igualdad por valor');
console.log(x==y);
console.log(x==5);
console.log(x=="5"); // el resultado es true porque el operador de igualdad por valor (==) compara los valores sin importar el tipo de dato, entonces, aunque x es un número y "5" es una cadena de texto, ambos tienen el mismo valor numérico de 5, por lo tanto, la comparación devuelve true
console.log(x==x);  // si se comparan dos variables con el mismo valor, el resultado es true

// igualdad por identidad (por tipo y valor) o igualdad estricta
console.log('igualdad por identidad (por tipo y valor) o igualdad estricta');
console.log(x===y); // el resultado es false porque el operador de igualdad por identidad (===) compara tanto el valor como el tipo de dato, entonces, aunque x tiene el mismo valor numérico de 5, no es del mismo tipo que y (que es un número), por lo tanto, la comparación devuelve false
console.log(x===5); // el resultado es true porque el operador de igualdad por identidad (===) compara tanto el valor como el tipo de dato, entonces, x tiene el mismo valor numérico de 5 y también es del mismo tipo que 5 (que es un número), por lo tanto, la comparación devuelve true
console.log(x==="5"); // el resultado es false porque el operador de igualdad por identidad (===) compara tanto el valor como el tipo de dato, entonces, aunque x tiene el mismo valor numérico de 5, no es del mismo tipo que "5" (que es una cadena de texto), por lo tanto, la comparación devuelve false

console.log(0==false); // el resultado es true porque el operador de igualdad por valor (==) compara los valores sin importar el tipo de dato, entonces, aunque 0 es un número y false es un booleano, ambos representan un valor "falsy" en JavaScript, lo que significa que se consideran equivalentes en términos de valor, por lo tanto, la comparación devuelve true
console.log(1==false); // el resultado es false porque el operador de igualdad por valor (==) compara los valores sin importar el tipo de dato, entonces, aunque 1 es un número y false es un booleano, 1 representa un valor "truthy" en JavaScript, lo que significa que no se considera equivalente a false, por lo tanto, la comparación devuelve false

console.log('diferencia');
let m= 0;
let n=3;
console.log(m!=n); // Desigualdad por valor, el resultado es TRUE porque el operador de desigualdad por valor (!=) compara los valores sin importar el tipo de dato, entonces, aunque m es un número y n es un número, ambos tienen valores diferentes (0 y 3 respectivamente), por lo tanto, la comparación devuelve true
console.log(m!="0"); // el resultado es FALSE porque el operador de desigualdad por valor (!=) compara los valores sin importar el tipo de dato, entonces, aunque m es un número y "0" es una cadena de texto, ambos representan el mismo valor numérico de 0, por lo tanto, la comparación devuelve false
console.log(m!==0); // Desigualdad por identidad (por tipo y valor) o desigualdad estricta, el resultado es FALSE porque el operador de desigualdad por identidad (!==) compara tanto el valor como el tipo de dato, entonces, m tiene el mismo valor numérico de 0 y también es del mismo tipo que 0 (que es un número), por lo tanto, la comparación devuelve false

console.log('comparación de 0 con otros valores');

console.log(0==""); // el resultado es true porque el operador de igualdad por valor (==) compara los valores sin importar el tipo de dato, entonces, aunque 0 es un número y "" es una cadena de texto, ambos representan un valor "falsy" en JavaScript, lo que significa que se consideran equivalentes en términos de valor, por lo tanto, la comparación devuelve true
console.log(0==" "); // el resultado es true porque el operador de igualdad por valor (==) compara los valores sin importar el tipo de dato, entonces, aunque 0 es un número y " " es una cadena de texto con un espacio, ambos representan un valor "falsy" en JavaScript, lo que significa que se consideran equivalentes en términos de valor, por lo tanto, la comparación devuelve true
console.log(0==''); // el resultado es true porque el operador de igualdad por valor (==) compara los valores sin importar el tipo de dato, entonces, aunque 0 es un número y '' es una cadena de texto vacía, ambos representan un valor "falsy" en JavaScript, lo que significa que se consideran equivalentes en términos de valor, por lo tanto, la comparación devuelve true
console.log(0=="Hola"); // el resultado es true porque el operador de igualdad por valor (==) compara los valores sin importar el tipo de dato, entonces, aunque 0 es un número y "Hola" es una cadena de texto, ambos representan un valor "falsy" en JavaScript, lo que significa que se consideran equivalentes en términos de valor, por lo tanto, la comparación devuelve true
console.log(0===""); // el resultado es false porque el operador de igualdad por identidad (===) compara tanto el valor como el tipo de dato, entonces, aunque 0 tiene el mismo valor numérico de 0, no es del mismo tipo que "" (que es una cadena de texto), por lo tanto, la comparación devuelve false
console.log(undefined==null); // el resultado es true porque el operador de igualdad por valor (==) compara los valores sin importar el tipo de dato, entonces, aunque undefined es un tipo de dato que representa la ausencia de valor y null es un tipo de dato que representa la ausencia intencional de valor, ambos se consideran equivalentes en términos de valor en JavaScript, por lo tanto, la comparación devuelve true
console.log(undefined===null); // el resultado es false porque el operador de igualdad por identidad (===) compara tanto el valor como el tipo de dato, entonces, aunque undefined y null se consideran equivalentes en términos de valor, no son del mismo tipo (undefined es un tipo de dato y null es otro tipo de dato), por lo tanto, la comparación devuelve false
//los siguientes valores son falsy: 0, 0n, null, undefined, NaN, false, cadenas de texto vacías
//los siguientes valores son truthy: todos los números positivos y negativos menos el cero, todas las cadenas de texto menos las vacías, el boolean true


console.log('operadores lógicos');
console.log(5 > 10 && 15 > 20); // and (&&), el resultado es false porque ambos operandos son falsos, entonces, la operación devuelve false 
console.log(5<10 && 15<20); // el resultado es true porque ambos operandos son verdaderos, entonces, la operación devuelve true
console.log(5<10 && 15>20); // el resultado es false porque uno de los operandos es falso, entonces, la operación devuelve false
console.log(5>10 && 15>20 && 30>40); // el resultado es false porque todos los operandos son falsos, entonces, la operación devuelve false
console.log(5>10 || 15>20); // or (||), el resultado es false porque ambos operandos son falsos, entonces, la operación devuelve false
console.log(5<10 || 15<20); // el resultado es true porque ambos operandos son verdaderos, entonces, la operación devuelve true
console.log(5<10 || 15>20); // el resultado es true porque uno de los operandos es verdadero, entonces, la operación devuelve true
console.log(5>10 || 15>20 || 30>40); // el resultado es false porque todos los operandos son falsos, entonces, la operación devuelve false
console.log(5>10 && 15>20 || 30<40); // el resultado es true porque el operador and (&&) tiene mayor precedencia que el operador or (||), entonces, primero se evalúa la operación 5>10 && 15>20, que devuelve false, y luego se evalúa la operación false || 30<40, que devuelve true  
console.log(!true); // not (!), el resultado es false porque el operador de negación (!) invierte el valor de true a false
console.log(!false);   // el resultado es true porque el operador de negación (!) invierte el valor de false a true
console.log(!(5>10 && 15>20)); // el resultado es true porque el operador and (&&) tiene mayor precedencia que el operador de negación (!), entonces, primero se evalúa la operación 5>10 && 15>20, que devuelve false, y luego se evalúa la operación !false, que devuelve true
console.log(!(5>10 || 15>20)); // el resultado es true porque el operador or (||) tiene mayor precedencia que el operador de negación (!), entonces, primero se evalúa la operación 5>10 || 15>20, que devuelve false, y luego se evalúa la operación !false, que devuelve true
console.log(true ? "Está lloviendo" : "No está lloviendo"); // Operadores ternarios, el resultado es "Está lloviendo" porque la condición es true, entonces, se ejecuta la primera expresión después del signo de interrogación (?), que es "Está lloviendo"
console.log('operadores ternarios');
console.log('ahora compararemos con una condición falsa');
// el operador ternario es una forma de escribir una expresión condicional de manera más concisa, se compone de tres partes: la condición, la expresión a ejecutar si la condición es verdadera y la expresión a ejecutar si la condición es falsa, se utiliza el signo de interrogación (?) para separar la condición de las expresiones y los dos puntos (:) para separar las dos expresiones
console.log(false ? "Está lloviendo" : "No está lloviendo"); // el resultado es "No está lloviendo" porque la condición es false, entonces, se ejecuta la segunda expresión después de los dos puntos (:), que es "No está lloviendo"
console.log(true ? 5 : 10); // el resultado es 5 porque la condición es true, entonces, se ejecuta la primera expresión después del signo de interrogación (?), que es 5
console.log(false ? 5 : 10); // el resultado es 10 porque la condición es false, entonces, se ejecuta la segunda expresión después de los dos puntos (:), que es 10
console.log(5 > 10 ? "Mayor" : "Menor"); // el resultado es "Menor" porque la condición 5 > 10 es false, entonces, se ejecuta la segunda expresión después de los dos puntos (:), que es "Menor"
console.log(5 < 10 ? "Mayor" : "Menor"); // el resultado es "Mayor" porque la condición 5 < 10 es true, entonces, se ejecuta la primera expresión después del signo de interrogación (?), que es "Mayor"
console.log(5 === 5 ? "Igual" : "Diferente"); // el resultado es "Igual" porque la condición 5 === 5 es true, entonces, se ejecuta la primera expresión después del signo de interrogación (?), que es "Igual"
console.log(5 === "5" ? "Igual" : "Diferente"); // el resultado es "Diferente" porque la condición 5 === "5" es false, entonces, se ejecuta la segunda expresión después de los dos puntos (:), que es "Diferente"
console.log(5 > 10 ? "Mayor" : 5 < 10 ? "Menor" : "Igual"); // el resultado es "Menor" porque la condición 5 > 10 es false, entonces, se evalúa la siguiente condición 5 < 10, que es true, por lo tanto, se ejecuta la expresión "Menor" después del signo de interrogación (?), y se omite la expresión "Igual" después de los dos puntos (:)
console.log(5 < 10 ? 5 > 3 ? "Mayor que 3" : "Menor o igual que 3" : "Mayor o igual que 10"); // el resultado es "Mayor que 3" porque la condición 5 < 10 es true, entonces, se evalúa la siguiente condición 5 > 3, que es true, por lo tanto, se ejecuta la expresión "Mayor que 3" después del signo de interrogación (?), y se omite la expresión "Menor o igual que 3" después de los dos puntos (:), así como la expresión "Mayor o igual que 10" después del segundo signo de interrogación (?)
//esto se interpreta como: si 5 < 10 es true, entonces, evalúa si 5 > 3 es true, si es true, devuelve "Mayor que 3", si es false, devuelve "Menor o igual que 3", si 5 < 10 es false, devuelve "Mayor o igual que 10" 
//se observa la primera condicion 5<10, se descarta la parte de "Mayor o igual que 10" porque esa parte solo se ejecuta si la primera condicion es falsa, luego se observa la segunda condicion 5>3, se descarta la parte de "Menor o igual que 3" porque esa parte solo se ejecuta si la segunda condicion es falsa, por lo tanto, el resultado final es "Mayor que 3"
