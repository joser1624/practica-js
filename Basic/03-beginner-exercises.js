/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
    //HOLA SOY JOSE, ESTOY APRENDIENDO JAVASCRIPT
// 2. Escribe un comentario en varias líneas
    /* HOLA SOY JOSE, ESTOY APRENDIENDO JAVASCRIPT */
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
    let nro= 7;  //number
    let letra= 'j'; //string
    let X= true;    //boolean
    let f;       //undefined
    let n= null;   //null
    let i= 451n;    //bigint    
    let r= Symbol();  //symbol

// 4. Imprime por consola el valor de todas las variables
    console.log(nro, letra, X, f, n, i, r);
// 5. Imprime por consola el tipo de todas las variables
    console.log(typeof nro)
    console.log(typeof letra)
    console.log(typeof X)
    console.log(typeof f)
    console.log(typeof n)
    console.log(typeof i)
    console.log(typeof r)
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
    nro= 9;  //number
    letra= 'a'; 
    X= false;
    f= 5;
    n= null;
    i= 123n;
    r= Symbol('hola');
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
    nro= 'dies';
    letra= 5;
    X= 'verdadero';
    f= null;
    n= undefined;
    i= false;
    r= 123;
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
 const nro2= 7;  //number
 const letra2= 'j'; //string
 const X2= true;    //boolean
 const f2= undefined;       //undefined
 const n2= null;   //null
 const i2= 451n;    //bigint    
 const r2= Symbol();  //symbol
// 9. A continuación, modifica los valores de las constantes
 //no se puede modificar el valor de una constante, por lo tanto, no se pueden modificar los valores de las constantes declaradas en el ejercicio anterior
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
    