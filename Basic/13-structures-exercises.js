/*
==============================
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
==============================
*/
/*
Bloque 1 – Arrays básicos (niveles 1-10)
----------------------------------------
*/
// 1. Crea un array que almacene cinco animales
// Pista: Usa corchetes [] y separa los elementos con comas
let animales = ['vaca', 'toro', 'oveja', 'perro', 'gato'];
console.log(animales);

//roly: 




// 2. Añade dos más. Uno al principio y otro al final
// Pista: Para el inicio usa unshift() y para el final push()
animales.unshift('caballo');
console.log(animales);
animales.push('conejo')
console.log(animales)




// 3. Elimina el que se encuentra en tercera posición
// Pista: Recuerda que los arrays empiezan en índice 0 y puedes usar splice()
animales.splice(3,1)
console.log(animales);




// 4. Invierte el array
// Pista: Hay un método que modifica el array original y lo invierte
animales.reverse();
console.log(animales)




// 5. Ordena alfabéticamente los elementos del array
// Pista: Usa sort() para ordenar strings, sort los ordena alfabeticamente
animales.sort()
console.log(animales)



// 6. Encuentra la posición del animal “perro” (suponiendo que exista en el array)
// Pista: indexOf() devuelve la posición o -1 si no existe



console.log('el animal perro se encuentra en la posicion ' + animales.indexOf('perro'));
// 7. Crea un nuevo array con los dos primeros elementos del original usando slice
// Pista: slice(inicio, fin) crea un nuevo array sin modificar el original
let animales2 = animales.slice(0,2);
console.log(animales2)



// 8. Sustituye el último elemento por uno nuevo usando splice
// Pista: splice(índice, cantidad, elementoNuevo)
animales.splice(-1,1,'camello')
console.log(animales)




// 9. Añade tres animales nuevos usando push
// Pista: push() acepta uno o varios elementos
console.log('los animales hasta aqui son >>>' + animales)
animales.push('aguila','nicolas','ian')
console.log(animales)



// 10. Elimina el primer elemento usando shift
// Pista: shift() elimina el primer elemento y lo devuelve
console.log('el animal eliminado con shift es ' + animales.shift());




/*////////////////////////////////////////////////////////////////////////////////////////
Bloque 2 – Sets y su manipulación (niveles 11-20)
--------------------------------------------------
*////////////////////////////////////////////////////////////////////////////////////////

// 11. Crea un set que almacene cinco libros
// Pista: Usa new Set([...]) pasando un array con los libros
let libros = new Set (['caballero carmelo','harry potter','alas de sangre','piense y hagase rico','padre rico padre pobre'])
console.log(libros);



// 12. Añade dos más. Uno de ellos repetido
// Pista: add() agrega elementos y no permite duplicados
libros.add('coquito')
libros.add('lalito') //--> se añade uno por uno y no se pueden añadir varios a la vez, ya que el método add() solo acepta un elemento como argumento, y si se intenta añadir varios elementos a la vez, se producirá un error.
libros.add('coquito') //--> no se añade porque ya existe en el set, ya que los sets no permiten elementos duplicados.
console.log(libros)



// 13. Elimina uno concreto a tu elección
// Pista: delete(elemento) elimina un valor específico
libros.delete('coquito')
console.log(libros)
console.log(libros.delete('coquito')) //-->devuelve false, porque el elemento 'coquito' ya no existe en el set después de eliminarlo, y no se puede eliminar algo que no existe en el set.
// 14. Comprueba si un libro específico existe en el set
// Pista: has(elemento) devuelve true o false
console.log(libros.has('lalito')) //--> devuelve true porque 'lalito' si existe



// 15. Convierte el set en un array y ordénalo alfabéticamente
// Pista: Array.from(set) o spread operator [...] + sort()
let miarray2=[]
console.log('este es mi nuevo array q viene de un SET')
miarray2=Array.from(libros);
console.log(miarray2)



// 16. Añade varios elementos usando un array y forEach//////////////////////////////////////////////////////
// Pista: Recorre el array y usa add() dentro del forEach
//ejemplo 
let arraylibros = ['el principito','el alquimista','el señor de los anillos']
arraylibros.forEach(libro => libros.add(libro)) // el foreach recorre cada elemento del array y lo añade al set usando add()
                                                // es como un for tradicional pero con una sintaxis más limpia y moderna, 
                                                // y es especialmente útil para trabajar con arrays y sets.
                                                // "libro" solo es el nombre de la variable que representa cada elemento del array 
                                                // durante la iteración, y puede ser cualquier nombre que elijas, 
                                                // lo importante es que dentro del bloque de código del forEach se use esa variable 
                                                // para referirse al elemento actual del array.
console.log(libros)

let array3= ['300','paco yunque']
array3.forEach(i=> libros.add(i))
console.log('agregue al set #libros ' + array3.length + ' elementos y quedaria asi : ' );
console.log(libros)




// 17. Crea un set a partir de un string y muestra sus letras únicas/////////////////////////////////////////
// Pista: new Set("cadena") separa cada carácter automáticamente
let cadena = "hola mundo";
let letrasUnicas = new Set(cadena);
console.log('Letras únicas en la cadena "' + cadena + '":');
for (let letra of letrasUnicas) {
  console.log(letra);
}
//ahora yo:
let cadena2= 'me quiero'
let susletras = new Set(cadena2);
for(let i of susletras) {
    console.log(i)
}



// 18. Combina dos sets en uno solo sin duplicados/////////////////////////////////////////////////////////
// Pista: Usa spread operator [...] y new Set([...set1,...set2])
let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([4, 5, 6, 7, 8]);
let setCombinado = new Set([...set1, ...set2]);
console.log(setCombinado) //--> el set combinado tendrá los números del 1 al 8 sin duplicados, es decir, {1, 2, 3, 4, 5, 6, 7, 8}.

//ahora yo:
let s1= new Set([9, 8, 7, 6,5]);
let s2= new Set([1,2,3,4,5,6,7,8]);
let set_combinado=new Set([...s1,...s2]);
console.log(set_combinado);




// 19. Crea un set que contenga números del 1 al 10 y elimina los pares//////////////////////////////////////
// Pista: Recorre el set con forEach y usa delete() para eliminar pares

let nros= new Set([1,2,3,4,5,6,7,8,9,10])
nros.forEach(m=> {
    if (m%2!=1){
        nros.delete(m)
    }
} )
console.log(nros)

                        /*estructura general : 
                        array.forEach((elemento, indice, arrayCompleto) => {
                            código aquí
                        });
                        */

// 20. Recorre un set y multiplica cada número por 2 almacenando los resultados en un array
// Pista: Crea un array vacío y dentro del forEach push(n*2)
let h =[];
nros.forEach(x=> {
    x*=2;
    h.push(x)
})
console.log(h)




/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
Bloque 3 – Maps y pares clave-valor (niveles 21-30)
-----------------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

// 21. Crea un mapa que asocie el número del mes a su nombre
// Pista: new Map([[clave, valor], ...])
let mapa= new Map([[1, 'enero'], [2, 'febrero'], [3, 'marzo'], [4, 'abril'], [5, 'mayo'], [6, 'junio'], [7, 'julio'], [8, 'agosto'], [9, 'septiembre'], [10, 'octubre'], [11, 'noviembre'], [12, 'diciembre']])



// 22. Comprueba si el mes número 5 existe en el map e imprime su valor
// Pista: has(clave) y get(clave)
console.log(mapa.has(5));
console.log(mapa.get(5))



// 23. Añade al mapa una clave con un array que almacene los meses de verano
// Pista: set(clave, valorArray)
let mesesVerano = ['enero', 'febrero', 'marzo'];
mapa.set('verano', mesesVerano);
console.log(mapa)
//ahora yo: 
let mesesInvierno=['mayo','junio','julio','agosto'];
mapa.set('invierno',mesesInvierno);
console.log(mapa);



// 24. Elimina un par clave-valor que no necesites
// Pista: delete(clave)
mapa.delete(1)
console.log(mapa)




// 25. Cambia el valor de un mes existente
// Pista: set(clave, nuevoValor) sobreescribe el anterior
let newverano= ['diciembre','enero','marzo','abril']
mapa.set('verano',newverano)
console.log(mapa)




// 26. Recorre el map e imprime todas las claves y valores
// Pista: forEach((valor, clave) => ...)
mapa.forEach((d,e) => {
    console.log('['+ e +':'+ d +']')
})




// 27. Crea un map donde la clave sea un país y el valor su capital
// Pista: igual que el ejercicio 21, pero con nombres de países
let pais=new Map([['Peru', 'Lima'],['Colombia', 'Bogota'],['Bolivia','La Paz'],['suiza','Berna'],['italia','Roma'],['francia','Paris']])
console.log(pais);



// 28. Convierte un array de objetos {id, nombre} en un map usando id como clave
// Pista: usa map() sobre el array y luego new Map()
let arrayObjetos = [{id: 1, nombre: 'Alice'}, {id: 2, nombre: 'Bob'}, {id: 3, nombre: 'Charlie'}];
let mapFromArray = new Map(arrayObjetos.map(obj => [obj.id, obj.nombre]));
console.log(mapFromArray)
        
        //explicación: el método map() se utiliza para transformar cada objeto del array en un par clave-valor, 
        // donde la clave es el id del objeto y el valor es el nombre del objeto. Luego, 
        // se crea un nuevo Map a partir de ese array de pares clave-valor utilizando el constructor new Map(). 
        // El resultado es un Map donde cada id es una clave y su correspondiente nombre es el valor asociado a esa clave.


       // ________________________________________________________________________________________________________________________
            // La estructura general para convertir un array de objetos en un Map es la siguiente:
            // let mapFromArray = new Map(array.map(obj => [obj.clave, obj.valor]));
            // En este caso, obj.clave representa la propiedad del objeto que deseas usar como clave en el Map, 
            // y obj.valor representa la propiedad del objeto que deseas usar como valor en el Map. 
            // Puedes ajustar estas propiedades según la estructura de tus objetos y las claves/valores que quieras asignar en el Map.
        //- --- -------------------------------------------------------------------------------------------------------------------

//ahora yo:
let arrayObjetos2 = [{id: 1, nombre: 'Peru'}, {id: 2, nombre: 'Colombia'}, {id: 3, nombre: 'Bolivia'}, {id: 4, nombre: 'Suiza'}, {id: 5, nombre: 'Italia'}, {id: 6, nombre: 'Francia'}];
let mapadeArray = new Map(arrayObjetos2.map(c=>[c.id,c.nombre]))
console.log(mapadeArray)



// 29. Crea un map que tenga sets como valores y añade elementos a esos sets
// Pista: set(clave, new Set([...])) y luego get(clave).add(nuevoElemento)
let mapConSets = new Map(); // se crea un nuevo Map vacío
mapConSets.set('frutas', new Set(['manzana', 'banana', 'naranja'])); // se añade una clave 'frutas' con un Set que contiene 
                                                                     // tres frutas //se puede declarar el set por separado 
                                                                     // y luego añadirlo al map, pero en este caso se hace 
                                                                     // todo en una sola línea para mayor concisión. 
                                                                     // tambien se pueden añadir varias frutas a la vez 

mapConSets.set('verduras', new Set(['lechuga', 'tomate', 'zanahoria']));
console.log(mapConSets)

// Añadiendo elementos a los sets dentro del map
mapConSets.get('frutas').add('uva'); // se accede al Set asociado a la clave 'frutas' usando get('frutas') 
                                     // y luego se añade 'uva' al Set con add('uva')
                                     //si envez de set('frutas', new Set([...]) ) se hubiera declarado el set por separado, 
                                     // se podría añadir la fruta al set antes de añadirlo al map, 
                                     // pero en este caso se hace todo en una sola línea para mayor concisión.
//|--------------------|    
//primero se usa get('frutas') para obtener el Set asociado a la clave 'frutas' en el Map,
//|---------------------------------|
//luego se llama al método add('uva') sobre ese Set para añadir la fruta 'uva' al conjunto de frutas.

mapConSets.get('verduras').add('pepino');
console.log(mapConSets)

// ahora yo:
let mapaconsets2= new Map();
mapaconsets2.set('amigos',new Set(['roly','basty','drake','lucho','anderson']))
mapaconsets2.set('cursos',new Set(['calculo2','programacion','fisica2']))
console.log(mapaconsets2)

mapaconsets2.get('amigos').add('maddox')
mapaconsets2.get('cursos').add('algrebra lineal')
console.log(mapaconsets2)

// 30. Comprueba si un valor existe en algún set dentro de un map
// Pista: Recorre el map con forEach y usa has() en cada set
mapaconsets2.forEach((valor, clave) => {
    if (valor.has('maddox')) {
        console.log(`El valor 'maddox' existe en el set asociado a la clave '${clave}'`);
    }
}
)


//ahora yo:
let nombre;
nombre='maddox'
mapaconsets2.forEach((value,key)=>{
    if(value.has('drake')){
        console.log(`el nombre ${nombre} esta dentro de ${key}`)
    } else {
        console.log(`el nombre ${nombre} NO esta dentro de ${key}`)
    }
})


/*
Bloque 4 – Ejercicios combinados y más realistas (niveles 31-40)
------------------------------------------------------------------
*/




// 31. Crea un array de usuarios {nombre, edad} y filtra los mayores de 25
// Pista: Usa filter() y una función que revise u.edad > 25
let usuarios = [
    {nombre: 'Alice', edad: 30},
    {nombre: 'Bob', edad: 22},
    {nombre: 'Charlie', edad: 28},
    {nombre: 'David', edad: 24},
    {nombre: 'Eve', edad: 26},
    {nombre: 'Frank', edad: 20}
];
//la funcion filter(), sirve para filtrar y crear un nuevo array , tiene una estructura similar a forEach(), asi:
/*
🔹 filter()

Sí necesita que le devuelvas (return) algo.

Ese return debe ser true o false.

Si devuelve true, el elemento se guarda.

Si devuelve false, se descarta.

*/
let may25 = usuarios.filter(j=> j.edad>25)
console.log(may25)





// 32. Transforma ese array en un set de nombres únicos
// Pista: Usa map() para extraer nombres y luego new Set()
let solonombres= may25.map(i=>i.nombre)
console.log(solonombres)
//transformandolo a set

let myset = new Set(solonombres)
console.log(myset);


//////////////////////////////////////////////////////////////////////////NOTA //////////////////////////////////////////////////////////////////////////////
/*
👉 Existe el método map() del objeto Array.
👉 Y existe una estructura diferente llamada Map (con M mayúscula).
*/
//////////////////////////////////////////////////////////////////////////NOTA //////////////////////////////////////////////////////////////////////////////



// 33. Crea un map donde cada nombre de usuario sea clave y la edad valor
// Pista: Usa map() sobre el array y luego new Map()
console.log('======================================================================')
console.log('33. Crea un map donde cada nombre de usuario sea clave y la edad valor')
console.log(may25)
console.log(`Tengo el array "may25" lo transformaremos en un Map`)

let arraypares = may25.map(usuario=>[usuario.nombre,usuario.edad]) // el método map() se utiliza para transformar cada objeto 
                                                                   // del array "may25" en un par clave-valor,
console.log(arraypares)
let newmap= new Map(arraypares)
console.log(newmap)

//ahora yo:
console.log('ahora yo')
let array2 = [{color: 'rojo', valor: '#FF0000'}, {color: 'verde', valor: '#00FF00'}, {color: 'azul', valor: '#0000FF'}];
let arraysinobjetos= array2.map(i=>[i.color,i.valor]) //transformamos cada objeto en un par [x,y]
console.log(arraysinobjetos)
console.log('ahora lo transformamos a Map')
let mapdecolores= new Map(arraysinobjetos)
console.log(mapdecolores)

/*/apuntes//////////////////////////////////////////////////////////
- los arrays en proyectos web se utilizan para almacenar listas ordenadas de elementos, como productos, usuarios, o cualquier tipo de datos que necesiten ser accedidos por su posición.
- los Map sirven en los proyectos web para almacenar datos relacionados de forma estructurada, como información de usuarios, configuraciones, o cualquier tipo de datos que requieran una asociación clave-valor.
- los Set son útiles para almacenar colecciones de elementos únicos, como etiquetas, categorías, o cualquier tipo de datos donde no se permitan duplicados.
- ambos son estructuras de datos fundamentales en JavaScript que permiten organizar y manipular información de manera eficiente en aplicaciones web.
*/



/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
==============================
MAP() EN JAVASCRIPT
==============================

¿QUÉ ES?
map() es un método EXCLUSIVO de los ARRAYS que sirve para
transformar cada elemento y devolver un NUEVO array.

IMPORTANTE:
- No modifica el array original.
- Siempre devuelve un nuevo array.
- Se usa cuando quieres transformar datos.

SINTAXIS:
array.map((elemento, indice) => {
    return nuevoValor
})

EJEMPLO BÁSICO:
let numeros = [1, 2, 3]

let dobles = numeros.map(n => n * 2)
// Resultado: [2, 4, 6]

==================================================
¿SE PUEDE USAR map() EN OTRAS ESTRUCTURAS?
==================================================

map() solo existe en arrays, PERO podemos convertir
otras estructuras a array para poder usarlo.

--------------------------------------------------
1️⃣ USAR map() EN UN SET
--------------------------------------------------

let numeros = new Set([1,2,3])

let resultado = [...numeros].map(n => n * 2)

¿QUÉ ES [...numeros]?
Es el operador SPREAD (...)
Convierte el Set en un Array.

Set → elimina duplicados
[...set] → lo transforma en array

Sirve para:
- Convertir Set en Array
- Poder usar métodos como map(), filter(), reduce()

--------------------------------------------------
2️⃣ USAR map() EN UN MAP
--------------------------------------------------

let usuarios = new Map([
  ["Ana", 25],
  ["Luis", 30]
])

let edades = [...usuarios].map(([nombre, edad]) => edad * 2)

Aquí:
[...usuarios] convierte el Map en array de pares:
[
  ["Ana", 25],
  ["Luis", 30]
]

Luego podemos usar map() normalmente.

--------------------------------------------------
3️⃣ USAR map() EN UN STRING
--------------------------------------------------

let texto = "hola"

let letras = [...texto].map(l => l.toUpperCase())

[...texto] convierte el string en array:
["h", "o", "l", "a"]

Luego usamos map() para transformarlo.

==================================================
RESUMEN MENTAL IMPORTANTE
==================================================

map() = sirven para transformar arrays y devolver un nuevo array
filter() = sirve para filtrar elementos de un array según una condición y devolver un nuevo array con los elementos que cumplen esa condición
reduce() = sirve para reducir un array a un solo valor acumulando resultados según una función que defines
forEach() = sirve para ejecutar una función sobre cada elemento de un array, pero no devuelve un nuevo array ni modifica el original, simplemente realiza una acción para cada elemento.

CLAVE:
Si algo NO es array pero es iterable (Set, Map, String),
puedes usar el operador spread (...) para convertirlo en array
y luego aplicar map().
*//*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/




// 34. Añade un nuevo usuario solo si no existe en el map
// Pista: Comprueba con has(nombre) antes de set(nombre, edad)




// 35. Convierte el map de usuarios a un array de strings “Nombre:Edad”
// Pista: Array.from(map).map(([clave,valor])=>`${clave}:${valor}`)

// 36. Crea un array con nombres duplicados y elimina los duplicados usando un set
// Pista: Usa new Set(array) y luego [...set]

// 37. Ordena un array de números de mayor a menor
// Pista: Usa sort((a,b)=>b-a)

// 38. Calcula la suma de todos los elementos de un array de números
// Pista: Usa reduce((acc,num)=>acc+num,0)

// 39. Crea un set con los días de la semana y elimina los fines de semana
// Pista: forEach sobre el set y delete("Sábado"), delete("Domingo")

// 40. Convierte un map en un array de arrays con [clave, valor]
// Pista: Usa Array.from(map) o [...map]


/*
Bloque 5 – Ejercicios avanzados de manipulación (niveles 41-50)
-----------------------------------------------------------------
*/

// 41. Crea un array con 10 números aleatorios y filtra los pares
// Pista: Usa Math.random() para generar números y filter(n=>n%2===0)

// 42. Crea un set de frutas y elimina aquellas que contengan la letra “a”
// Pista: forEach sobre el set y delete() según includes("a")

// 43. Crea un map con productos y sus precios, y aumenta todos los precios un 10%
// Pista: forEach sobre map y set(clave, valor*1.1)

// 44. Convierte un array de strings en un mapa donde la clave sea la primera letra y el valor un array de palabras que comiencen con esa letra
// Pista: recorre el array y usa map.has(clave) ? map.get(clave).push(palabra) : map.set(clave,[palabra])

// 45. Crea un array de objetos {producto, precio} y calcula el precio promedio
// Pista: reduce() para sumar los precios y dividir por length

// 46. Filtra un array de objetos para quedarte solo con los que tengan precio > 50
// Pista: Usa filter(obj=>obj.precio>50)

// 47. Combina dos arrays en un map donde las claves provengan del primero y los valores del segundo
// Pista: Usa map(), zip o bucle for para recorrer ambos arrays simultáneamente

// 48. Recorre un array de objetos y genera un set con todas las categorías únicas
// Pista: extrae las categorías con map() y luego new Set()

// 49. Ordena un array de objetos alfabéticamente según una propiedad nombre
// Pista: sort((a,b)=>a.nombre.localeCompare(b.nombre))

// 50. Elimina duplicados de un array de objetos usando Set y JSON.stringify
// Pista: Convierte cada objeto a string, crea set, luego parsea de nuevo


/*
Bloque 6 – Mini proyecto orientado a sistemas web (niveles 51-70)
------------------------------------------------------------------
*/

// 51. Crea un array de productos de un carrito {nombre, cantidad, precio}
// Pista: Cada elemento es un objeto {nombre:"", cantidad:0, precio:0}

// 52. Convierte el array en un map donde la clave sea el nombre del producto y el valor la cantidad
// Pista: Usa new Map(array.map(p=>[p.nombre,p.cantidad]))

// 53. Añade un producto nuevo solo si no existe
// Pista: map.has(nombre) antes de set(nombre,cantidad)

// 54. Modifica la cantidad de un producto existente
// Pista: get(nombre) + nueva cantidad y set(nombre, valorActualizado)

// 55. Elimina un producto cuyo precio sea menor a 5
// Pista: filter() sobre el array o forEach sobre map con delete()

// 56. Calcula el total del carrito sumando cantidad * precio
// Pista: reduce((acc,p)=>acc+p.cantidad*p.precio,0)

// 57. Crea un set con todas las categorías de productos
// Pista: new Set(array.map(p=>p.categoria))

// 58. Filtra los productos cuyo nombre contenga “agua”
// Pista: filter(p=>p.nombre.includes("agua"))

// 59. Ordena los productos de mayor a menor precio
// Pista: sort((a,b)=>b.precio-a.precio)

// 60. Crea un array con los nombres de los productos ordenados alfabéticamente
// Pista: map(p=>p.nombre).sort()

// 61. Convierte el carrito a JSON y vuelve a parsearlo
// Pista: JSON.stringify(array) y JSON.parse(string)

// 62. Filtra los productos con cantidad > 2 y almacénalos en un nuevo array
// Pista: filter(p=>p.cantidad>2)

// 63. Crea un map donde la clave sea la categoría y el valor un array de productos de esa categoría
// Pista: Recorre el array y usa map.has(categoria) ? map.get(categoria).push(producto) : map.set(categoria,[producto])

// 64. Añade un producto duplicado y verifica que no se repita en el set de nombres
// Pista: Usa un Set para los nombres

// 65. Calcula el promedio de precio de todos los productos
// Pista: reduce() para sumar precios y dividir entre length

// 66. Crea un array de nombres en mayúsculas a partir del carrito
// Pista: map(p=>p.nombre.toUpperCase())

// 67. Recorre el map de categorías y muestra cuántos productos tiene cada categoría
// Pista: forEach((arrayProductos, categoria)=>arrayProductos.length)

// 68. Filtra productos cuyo precio esté entre 10 y 50
// Pista: filter(p=>p.precio>=10 && p.precio<=50)

// 69. Elimina los productos con cantidad 0
// Pista: filter(p=>p.cantidad>0) o forEach sobre map y delete()

// 70. Crea un sistema que permita agregar productos al carrito y actualizar su cantidad automáticamente
// Pista: Antes de agregar, verifica si existe en el array/map; si existe suma cantidad, si no, agrega nuevo producto