/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma;
let resta;
let multiplicacion;
let division;
let resto;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
suma2+=suma;
resta2-=resta;
milti*=multiplicacion;
div/=division;
rest%=resto;
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5>3);
console.log(!(3>5))
console.log(!(' '))
console.log(5)
console.log(true)
let x=10;
console.log(x=='10')

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(false)
console.log(' ')
console.log('')
console.log(NaN)
console.log(2===3)
// 5. Utiliza el operador lógico and
console.log(4>1 && 3>2);
// 6. Utiliza el operador lógico or
console.log(2>3 || 4>1);

// 7. Combina ambos operadores lógicos
console.log(2>3 && 3>4 || 5>2);
// 8. Añade alguna negación
console.log(!(x==2));
// 9. Utiliza el operador ternario
console.log(5>2 ? true : false)
// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(5+3!=4+4 ? 2>3 || 4>3 ? '8 es igual a 8 y 4 >3': 'no es asi': false);
