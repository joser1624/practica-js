/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map
// --> un map es una colección de pares clave-valor, donde cada clave es única y se utiliza para acceder a su valor correspondiente. Es una estructura de datos que se utiliza para almacenar datos en forma de pares clave-valor, y es similar a los objetos, pero con algunas diferencias importantes.
// Declaración

let myMap = new Map()

console.log(myMap) //resultado: Map(0) {} -> un map vacío, sin elementos, con una longitud de 0.

// Inicialiación

myMap = new Map([  //se pone parentecis y corchetes porque se le pasa un array de arrays, donde cada sub-array representa un par clave-valor.
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap) // resultado: Map(3) {"name" => "Brais", "email" => "braismoure@mouredev.com", "age" => 37}

// Métodos y propiedades

// set --> sirve para agregar o actualizar un par clave-valor en el map. 
// Si la clave ya existe, su valor se actualizará con el nuevo valor proporcionado. 
// Si la clave no existe, se agregará un nuevo par clave-valor al map. 
// El método set devuelve el map actualizado, lo que permite encadenar múltiples llamadas a set si es necesario. Por ejemplo:

myMap.set("alias", "mouredev") // devuelve : Map(4) {"name" => "Brais", "email" => "braismoure@mouredev.com", "age" => 37, "alias" => "mouredev"}
myMap.set("name", "Brais Moure") // devuelve: Map(4) {"name" => "Brais Moure", "email" => "braismoure@mouredev.com", "age" => 37, "alias" => "mouredev"}

console.log(myMap)

// get --> se utiliza para obtener el valor asociado a una clave específica en un map. 
// El método get toma una clave como argumento y devuelve el valor correspondiente a esa clave en el map. 
// Si la clave no existe en el map, get devuelve undefined. Por ejemplo:
// En este ejemplo, se crea un map llamado myMap con tres pares clave-valor. Luego, se utiliza el método get para obtener el valor asociado a la clave "name" y "surname".

console.log(myMap.get("name")) //devuelve: "Brais Moure"
console.log(myMap.get("surname")) // devuelve: undefined, porque no existe la clave "surname" en el map.

// has --> se utiliza para verificar si una clave específica existe en un map. 
// El método has toma una clave como argumento y devuelve TRUE si la clave existe en el map, o FALSE si no existe. Por ejemplo:

console.log(myMap.has("surname")) //devuelve: false, porque no existe la clave "surname" en el map.
console.log(myMap.has("age")) // devuelve: true, porque existe la clave "age" en el map.

// delete --> se utiliza para eliminar un par clave-valor específico de un map. 
// El método delete toma una clave como argumento y elimina el par clave-valor correspondiente a esa clave del map. 
//Si la clave existe y se elimina correctamente, delete devuelve true. 
// Si la clave no existe en el map, delete devuelve false. Por ejemplo:


//HASTA AQUI TENEMOS EL MAP CON LOS SIGUIENTES PARES CLAVE-VALOR: 
// Map(3) { "name" => "Brais Moure", "email" => "braismoure@mouredev.com", "age" => 37, "alias" => "mouredev"}
myMap.delete("email") // devuelve: true, porque la clave "email" existe en el map y se eliminó correctamente.
myMap.delete("surname") // devuelve: false, porque la clave "surname" no existe en el map.

console.log(myMap) // resultado: Map(3) {"name" => "Brais Moure", "age" => 37, "alias" => "mouredev"}, 
// porque se eliminó el par clave-valor correspondiente a la clave "email".

// keys, values y entries
// keys se utiliza para obtener un iterador que contiene las claves de un map.
// values se utiliza para obtener un iterador que contiene los valores de un map.
// entries se utiliza para obtener un iterador que contiene los pares clave-valor de un map como arrays de dos elementos, 
// donde el primer elemento es la clave y el segundo elemento es el valor.

console.log(myMap.keys()) // devuelve: MapIterator {"name", "age", "alias"}, que es un iterador que contiene las claves del map.
console.log(myMap.values()) // devuelve: MapIterator {"Brais Moure", 37, "mouredev"}, que es un iterador que contiene los valores del map.
console.log(myMap.entries()) // devuelve: MapIterator {"name" => "Brais Moure", "age" => 37, "alias" => "mouredev"}, 
// que es un iterador que contiene los pares clave-valor del map como arrays de dos elementos.

// size --> se utiliza para obtener el número de pares clave-valor presentes en un map.

//myMap tiene los siguientes pares clave-valor: Map(3) {"name" => "Brais Moure", "age" => 37, "alias" => "mouredev"}

console.log(myMap.size) // devuelve: 3, que es el número de pares clave-valor presentes en el map.
 
// clear --> se utiliza para eliminar todos los pares clave-valor de un map, dejando el map vacío.

myMap.clear() // devuelve: undefined, porque el método clear no devuelve ningún valor. 
             //  Sin embargo, después de llamar a clear, el map myMap estará vacío, es decir, no contendrá ningún par clave-valor.

console.log(myMap) // resultado: Map(0) {}, que es un map vacío después de llamar al método clear.



/*
===================================================================================================================0
METODOS IMPORTANTES DE ARRAYS EN JAVASCRIPT
Apuntes para repasar
=====================================================================================================================
*/
//un metodo es una función que se asocia a un objeto o a una clase, y que se puede llamar utilizando la sintaxis de punto (objeto.metodo()).
// un array es un tipo de objeto en JavaScript que se utiliza para almacenar una colección de elementos, y los métodos de arrays son funciones predefinidas que se pueden utilizar para manipular y trabajar con los arrays de manera eficiente.

//un objeto iterable es aquel que implementa el protocolo de iteración, 
// lo que significa que tiene un método Symbol.iterator que devuelve un iterador.
// un iterador es un objeto que tiene un método next() que devuelve un objeto con dos propiedades: 
// value, que es el valor actual del iterador, y done, que es un booleano que indica si el iterador ha terminado de recorrer la colección o no.
// un iterable es cualquier objeto que se puede recorrer con un bucle for...of, como un array, un string, un map, etc.
// un objeto como tal es una colección de propiedades, donde cada propiedad tiene un nombre (clave) y un valor asociado. 
// En JavaScript, los objetos se pueden crear utilizando la sintaxis de llaves ({}) o utilizando la función constructora Object().

//una clase es una plantilla para crear objetos, que define las propiedades y métodos que los objetos creados a partir de esa clase tendrán.
// una función constructora es una función que se utiliza para crear objetos a partir de una clase, y se llama utilizando el operador new. 
// La función constructora inicializa las propiedades del objeto y puede definir métodos para ese objeto. 
// En JavaScript, las clases son una forma más moderna y sintácticamente más clara de crear objetos y manejar la herencia, pero debajo de ellas se utilizan funciones constructoras para crear los objetos.


/*
1️⃣ forEach()

¿Para qué sirve?
- Recorre el array y ejecuta una función por cada elemento.
- NO devuelve un nuevo array.
- Se usa cuando solo quieres ejecutar algo (ej: imprimir en consola).

Sintaxis:
array.forEach((elemento, indice, array) => { ... })

Ejemplo:
*/
[1,2,3].forEach(num => {
    console.log(num);
});


/*
2️⃣ map()

¿Para qué sirve?
- Recorre el array y transforma cada elemento.
- Devuelve un NUEVO array del mismo tamaño.
- Se usa cuando quieres modificar datos.

Sintaxis:
array.map((elemento) => nuevaVersion)

Ejemplo:
*/
let dobles = [1,2,3].map(n => n * 2);
// Resultado: [2,4,6]


/*
3️⃣ filter()

¿Para qué sirve?
- Filtra elementos según una condición.
- Devuelve un NUEVO array.
- La función debe devolver true o false.

Sintaxis:
array.filter(elemento => condicion)

Ejemplo:
*/
let mayores = [10, 20, 5, 30].filter(n => n > 15);
// Resultado: [20,30]


/*
4️⃣ reduce()

¿Para qué sirve?
- Reduce todo el array a un solo valor.
- Se usa para sumar, contar, agrupar, etc.
- Recibe un acumulador.

Sintaxis:
array.reduce((acumulador, elemento) => resultado, valorInicial)

Ejemplo:
*/
let suma = [1,2,3,4].reduce((acc, num) => acc + num, 0);
// Resultado: 10


/*
5️⃣ find()

¿Para qué sirve?
- Devuelve el PRIMER elemento que cumple la condición.
- No devuelve un array.
- Si no encuentra nada devuelve undefined.

Sintaxis:
array.find(elemento => condicion)

Ejemplo:
*/
let encontrado = [5,10,15].find(n => n > 8);
// Resultado: 10


/*
6️⃣ some()

¿Para qué sirve?
- Devuelve true si AL MENOS UNO cumple la condición.
- Devuelve false si ninguno cumple.

Sintaxis:
array.some(elemento => condicion)

Ejemplo:
*/
let hayMayor = [1,2,3,4].some(n => n > 3);
// Resultado: true


/*
7️⃣ every()

¿Para qué sirve?
- Devuelve true si TODOS cumplen la condición.
- Devuelve false si alguno no cumple.

Sintaxis:
array.every(elemento => condicion)

Ejemplo:
*/
let todosPares = [2,4,6].every(n => n % 2 === 0);
// Resultado: true


/*
8️⃣ push() y pop()

¿Para qué sirven?
- push(): agrega un elemento al FINAL.
- pop(): elimina el último elemento.
- Modifican el array original.

Ejemplo:
*/
let arr1 = [1,2];
arr1.push(3); // [1,2,3]
arr1.pop();   // [1,2]


/*
9️⃣ shift() y unshift()

¿Para qué sirven?
- unshift(): agrega al INICIO.
- shift(): elimina el primero.
- Modifican el array original.

Ejemplo:
*/
let arr2 = [2,3];
arr2.unshift(1); // [1,2,3]
arr2.shift();    // [2,3]


/*
==============================
RESUMEN MENTAL RAPIDO
==============================

forEach → ejecutar
map     → transformar
filter  → filtrar
reduce  → acumular
find    → encontrar uno
some    → existe alguno?
every   → todos cumplen?
push    → agregar al final
pop     → quitar último
shift   → quitar primero
unshift → agregar al inicio
*/