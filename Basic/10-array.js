/*
Clase 25 - Arrays
Vídeo: https://youtu.be/1glVfFxj8a4?t=8741
*/

// Array
//son estructuras de datos que nos permiten almacenar múltiples valores en una sola variable.
//  Son muy útiles para organizar y manipular conjuntos de datos relacionados. 
// En JavaScript, los arrays son objetos que pueden contener cualquier tipo de dato, incluyendo otros arrays.

// Declaración

let myArray = [] //es mas usada
let myArray2 = new Array() //no se usa tanto para declarar un array, pero es una forma alternativa de hacerlo.

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3] //crea un array con un solo elemento, el número 3, en la posición 0. No crea un array con una longitud de 3, sino que asigna el valor 3 a la posición 0 del array.
myArray2 = new Array(3)  //deja 3 posiciones vacías, no asigna el valor 3 a la posición 0, sino que crea un array con una longitud de 3.

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4] //asigna los valores 1, 2, 3 y 4 a las posiciones 0, 1, 2 y 3 del array respectivamente.
myArray2 = new Array(1, 2, 3, 4) //asigna los valores 1, 2, 3 y 4 a las posiciones 0, 1, 2 y 3 del array respectivamente. 
                                 //En este caso, el resultado es el mismo que con la sintaxis de corchetes, 
                                 // porque se están pasando los mismos valores como argumentos al constructor del array.
                                 // En resumen, la sintaxis de corchetes es más común y directa para crear e inicializar arrays con valores específicos,
                                 // mientras que la sintaxis de constructor se utiliza principalmente para crear arrays con una longitud específica o para casos más complejos.
console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true] //dentro de un array podemos almacenar cualquier tipo de dato, incluso otros arrays.
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true) //En este caso, el resultado es el mismo que con la sintaxis de corchetes,
                                                             // porque se están pasando los mismos valores como argumentos al constructor del array.

console.log(myArray)
console.log(myArray2)

//en los siguientes casos, se muestra la diferencia entre asignar un valor a una posición específica del array 
// y crear un array con una longitud determinada sin asignar valores a las posiciones del array.
myArray2 = new Array(3) //crea un array con una longitud de 3, pero no asigna ningún valor a las posiciones del array.
console.log('aqui estamos', myArray2,'antes de asignar valores a las posiciones del array en las posiciones 2, 1 y 4')
myArray2[2] = "Brais" // asigna el valor "Brais" a la posición 2 del array, mientras que las posiciones 0 y 1 quedan vacías (undefined) porque no se les ha asignado ningún valor.
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"
//el listado de elementos del array se muestra con los valores asignados en las posiciones 1, 2 y 4, mientras que las posiciones 0 y 3 aparecen como vacías (undefined) porque no se les ha asignado ningún valor.

console.log(myArray2)
console.log('aqui estamos', myArray2,'después de asignar valores a las posiciones del array')

myArray = [] //crea un array vacío, sin elementos ni longitud definida.
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop
//push agrega un nuevo elemento al final del array, mientras que pop elimina el último elemento del array y lo devuelve. 
// Ambos métodos modifican el array original.

myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve imprimiendo "37" en consola, pero el array queda con los elementos ["Brais", "Moure", "mouredev"].
myArray.pop()
// si pongo console.log(myArray.pop()) se muestra el valor eliminado, 
// pero si solo pongo myArray.pop() se elimina el último elemento pero no se muestra en consola.
//tambien el pop() devuelve el valor eliminado,y podemos almacenarlo en una variable para usarlo posteriormente,
// por ejemplo: let removedElement = myArray.pop(); console.log(removedElement); nos mostraría el valor eliminado en consola.


console.log('aqui estamos', myArray) // El array queda con los elementos ["Brais", "Moure"] después de eliminar los últimos dos elementos con pop().
console.log(myArray)

// shift y unshift
// shift elimina el primer elemento del array y lo devuelve, 
// mientras que unshift agrega uno o más elementos al inicio del array.
console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Brais", "mouredev")
console.log(myArray)

// length

console.log(myArray.length)

// clear
// No existe un método específico para limpiar un array, pero podemos asignar un nuevo array vacío a la variable que contiene el array original para eliminar todos los elementos del array.
myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice
// slice devuelve una copia de una parte del array dentro de un nuevo array, sin modificar el array original.

//definimos un array con varios elementos
console.log('aqui estamos', myArray,'antes de slice')
myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 3) 
// devuelve un nuevo array con los elementos desde la posición 1 hasta la posición 3 (sin incluir la posición 3), 
// es decir, ["Moure", "mouredev"].

console.log(myArray)
console.log(myNewArray)

// splice
// splice(posicion, cantidad_a_borrar, elementos_nuevos)

//Eliminar
//let numeros = [1,2,3,4,5];
//numeros.splice(2,1);
//console.log(numeros); // [1,2,4,5]

//Agregar
//let numeros = [1,2,3,4,5];
//numeros.splice(2,0,10); //se pone 0 para indicar que no se va a eliminar ningún elemento, y se agrega el número 10 en la posición 2 del array.
//console.log(numeros); // [1,2,10,3,4,5]

//Reemplazar
//let numeros = [1,2,3,4,5];
//numeros.splice(2,1,'se agrego esto'); //se pone 1 para indicar que se va a eliminar un elemento (el número 3 en este caso), 
// y se agrega el número 10 en la posición 2 del array.
//console.log(numeros); // [1,2,'se agrego esto',4,5]



console.log('aqui estamos', myArray,'antes de splice')
console.log('aplicamos splice para eliminar elementos desde la posición 1 hasta la posición 3 (sin incluir la posición 3)')
myArray.splice(1, 3)
console.log(myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)

//RESUMEN --> slice devuelve una copia de una parte del array sin modificar el array original, 
// mientras que splice modifica el array original eliminando elementos existentes y/o agregando nuevos elementos en su lugar.