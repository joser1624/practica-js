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

// 16. Añade varios elementos usando un array y forEach
// Pista: Recorre el array y usa add() dentro del forEach

// 17. Crea un set a partir de un string y muestra sus letras únicas
// Pista: new Set("cadena") separa cada carácter automáticamente

// 18. Combina dos sets en uno solo sin duplicados
// Pista: Usa spread operator [...] y new Set([...set1,...set2])

// 19. Crea un set que contenga números del 1 al 10 y elimina los pares
// Pista: Recorre el set con forEach y usa delete() para eliminar pares

// 20. Recorre un set y multiplica cada número por 2 almacenando los resultados en un array
// Pista: Crea un array vacío y dentro del forEach push(n*2)


/*
Bloque 3 – Maps y pares clave-valor (niveles 21-30)
-----------------------------------------------------
*/

// 21. Crea un mapa que asocie el número del mes a su nombre
// Pista: new Map([[clave, valor], ...])

// 22. Comprueba si el mes número 5 existe en el map e imprime su valor
// Pista: has(clave) y get(clave)

// 23. Añade al mapa una clave con un array que almacene los meses de verano
// Pista: set(clave, valorArray)

// 24. Elimina un par clave-valor que no necesites
// Pista: delete(clave)

// 25. Cambia el valor de un mes existente
// Pista: set(clave, nuevoValor) sobreescribe el anterior

// 26. Recorre el map e imprime todas las claves y valores
// Pista: forEach((valor, clave) => ...)

// 27. Crea un map donde la clave sea un país y el valor su capital
// Pista: igual que el ejercicio 21, pero con nombres de países

// 28. Convierte un array de objetos {id, nombre} en un map usando id como clave
// Pista: usa map() sobre el array y luego new Map()

// 29. Crea un map que tenga sets como valores y añade elementos a esos sets
// Pista: set(clave, new Set([...])) y luego get(clave).add(nuevoElemento)

// 30. Comprueba si un valor existe en algún set dentro de un map
// Pista: Array.from(map.get(clave)).includes(valor)
/*
Bloque 4 – Ejercicios combinados y más realistas (niveles 31-40)
------------------------------------------------------------------
*/

// 31. Crea un array de usuarios {nombre, edad} y filtra los mayores de 25
// Pista: Usa filter() y una función que revise u.edad > 25

// 32. Transforma ese array en un set de nombres únicos
// Pista: Usa map() para extraer nombres y luego new Set()

// 33. Crea un map donde cada nombre de usuario sea clave y la edad valor
// Pista: Usa map() sobre el array y luego new Map()

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