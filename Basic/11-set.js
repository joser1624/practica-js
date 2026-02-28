/*
Clase 26 - Sets 
Vídeo: https://youtu.be/1glVfFxj8a4?t=9952
*/

// Set --> un set es una colección de valores únicos, es decir, no permite elementos duplicados.
// Es una estructura de datos que se utiliza para almacenar valores únicos de cualquier tipo, ya sea primitivos o referencias a objetos. 
// Los sets son útiles cuando queremos asegurarnos de que no haya elementos duplicados en una colección de datos.

// Declaración .. sirve para declarar un set, pero no es la forma más común de hacerlo, ya que no es tan intuitiva como la sintaxis de los arrays o los objetos.

let mySet = new Set() //esta es la forma más común de declarar un set, 
                      // aunque también se puede declarar con la función Set() sin el operador new, pero no es recomendable.

console.log(mySet)

// Inicialización .. se puede inicializar un set con un array de valores, ya que el constructor de Set() acepta un iterable como argumento.

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])
//siempre se pone corchetes  [  ] , aunque solo se quiera añadir un elemento, 
// ya que el constructor de Set() espera un iterable como argumento.
//--> un iterable es cualquier objeto que se puede recorrer con un bucle for...of, como un array, un string, un map, etc.
console.log(mySet)

// Métodos comunes

// add y delete
//--> el add se utiliza para añadir un elemento al set, y el delete se utiliza para eliminar un elemento del set.
mySet.add("https://moure.dev")
//--> el add agrega un nuevo elemento al set, pero si el elemento ya existe, no se agrega de nuevo, 
// ya que los sets no permiten elementos duplicados.
console.log(mySet)

mySet.delete("https://moure.dev")
//--> el delete elimina un elemento del set, pero si el elemento no existe, no hace nada, ya que los sets no permiten elementos duplicados.
//--> el delete devuelve true si el elemento se eliminó correctamente, y false si el elemento no existía en el set.
//se debe indicar el elemento que se quiere eliminar, ya que el delete no elimina por posición, sino por valor, a diferencia de los arrays que eliminan por posición con el método splice() o pop().
console.log(mySet)

console.log(mySet.delete("Brais")) //devuelve true, ya que el elemento "Brais" existe en el set y se elimina correctamente.
console.log(mySet.delete(4)) //devuelve false, ya que el elemento 4 no existe en el set y no se elimina nada.

console.log(mySet) //devuelve el set actualizado después de eliminar el elemento "Brais" y no eliminar nada con el elemento 4, ya que no existe en el set.
                    // devuelve: Set(5) { 'Moure', 'mouredev', 37, true, '} ??
// has ///////////////////////////////////////////////////////////////////
//--> el has se utiliza para comprobar si un elemento existe en el set, y devuelve true si el elemento existe, y false si el elemento no existe.
console.log(mySet.has("Moure")) //devuelve true, ya que el elemento "Moure" existe en el set.
console.log(mySet.has("Brais")) //devuelve false, ya que el elemento "Brais" no existe en el set.

// size ////////////////////////////////////////////////////////////////////
// --> el size se utiliza para obtener el número de elementos que hay en el set, y devuelve un número entero que representa el tamaño del set.
console.log(mySet.size) //devuelve 5, ya que el set tiene 5 elementos después de eliminar el elemento "Brais" y no eliminar nada con el elemento 4, ya que no existe en el set.

// Convertir un set a array
let myArray = Array.from(mySet) //--> el Array.from() se utiliza para convertir un set a un array, y devuelve un nuevo array con los elementos del set.
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray) //--> el constructor de Set() se puede utilizar para convertir un array a un set, y devuelve un nuevo set con los elementos del array, pero sin duplicados, ya que los sets no permiten elementos duplicados.
console.log(mySet)

// No admite duplicados

mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)

//la diferencia entre set y array es que el set no permite elementos duplicados, mientras que el array sí permite elementos duplicados.
//--> el set es una estructura de datos que se utiliza para almacenar valores únicos de cualquier tipo, ya sea primitivos o referencias a objetos, mientras que el array es una estructura de datos que se utiliza para almacenar una colección de elementos ordenados, que pueden ser de cualquier tipo, incluyendo valores duplicados.    
//--> el set no tiene un orden específico, mientras que el array tiene un orden específico, ya que los elementos se almacenan en una posición determinada, y se pueden acceder a ellos mediante su índice.
//--> el set no tiene métodos para acceder a los elementos por su posición, mientras que el array tiene métodos para acceder a los elementos por su posición, como el método indexOf() o el método slice().
//--> el set tiene métodos para añadir, eliminar y comprobar la existencia de elementos, mientras que el array tiene métodos para añadir, eliminar y acceder a los elementos por su posición, como el método push(), el método pop(), el método shift(), el método unshift(), etc.
//--> el set es una estructura de datos que se utiliza para almacenar valores únicos de cualquier tipo, ya sea primitivos o referencias a objetos, mientras que el array es una estructura de datos que se utiliza para almacenar una colección de elementos ordenados, que pueden ser de cualquier tipo, incluyendo valores duplicados.