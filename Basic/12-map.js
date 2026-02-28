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
console.log(myMap.entries()) // devuelve: MapIterator {"name" => "Brais Moure", "age" => 37, "alias" => "mouredev"}, que es un iterador que contiene los pares clave-valor del map como arrays de dos elementos.

// size --> se utiliza para obtener el número de pares clave-valor presentes en un map.

//myMap tiene los siguientes pares clave-valor: Map(3) {"name" => "Brais Moure", "age" => 37, "alias" => "mouredev"}

console.log(myMap.size) // devuelve: 3, que es el número de pares clave-valor presentes en el map.
 
// clear --> se utiliza para eliminar todos los pares clave-valor de un map, dejando el map vacío.

myMap.clear() // devuelve: undefined, porque el método clear no devuelve ningún valor. 
             //  Sin embargo, después de llamar a clear, el map myMap estará vacío, es decir, no contendrá ningún par clave-valor.

console.log(myMap) // resultado: Map(0) {}, que es un map vacío después de llamar al método clear.



