/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nro=-1;
if(nro==2){
console.log('mi nombre es jose')
}else{
console.log('mi nombre no es jose')
};
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = 'jose'
let pass = 12345
if (user == 'jose') {
    if (pass == 12345) {
        console.log('ACCSESO CONSEDIDO')
    }
} else {
        console.log('NO ESTAS REGISTRADO')
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
if(nro >0){
    console.log('el numero es positivo')
}else if (nro == 0) {
    console.log('el numero es cero')
}else{
    console.log('el numero es negativo')
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 12;
if ((18-edad)>0){
    console.log(`eres menor de edad, te faltan ${18-edad} años para poder sufragar`)
} else {
    console.log('Usted puede votar')
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let prueba=edad>=18 ? 'Eres mayor' : 'Eres menor' ;
console.log(prueba);
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

switch (mes){
    case 1:
    case 2:
    case 3:
    case 12:
        console.log('Es verano')
        break;
    default:
        console.log('Es invierno')
        break;
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
switch (mes){
    case 1:
        console.log('Enero')
        break
    case 2:
        console.log('Febrero')
        break
    case 3:
        console.log('Marzo')
        break
    case 4:
        console.log('Abril')
        break
    case 5:
        console.log('Mayo')
        break
    case 6:
        console.log('Junio')
        break
    case 7:
        console.log('Julio')
        break
    case 8:
        console.log('Agosto')
        break
    case 9:
        console.log('Septiembre')
        break
    case 10:
        console.log('Octubre')
        break
    case 11:
        console.log('Noviembre')
        break
    case 12:
        console.log('Diciembre')
        break
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma ='quechua'

switch (idioma){
    case 'aleman':
        console.log('Guten morguen')
        break
    case 'ingles':
        console.log('good morning')
        break
    case 'italiano':
        console.log('Buongiorno')
        break
    case 'quechua':
        console.log('allin punchay')
        break
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes){
    case 1:
    case 2:
    case 3:
    case 12:
        console.log('Es verano')
        break;
    default:
        console.log('Es invierno')
        break;
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes){
    case 1:
        console.log('Enero')
        break
    case 2:
        console.log('Febrero')
        break
    case 3:
        console.log('Marzo')
        break
    case 4:
        console.log('Abril')
        break
    case 5:
        console.log('Mayo')
        break
    case 6:
        console.log('Junio')
        break
    case 7:
        console.log('Julio')
        break
    case 8:
        console.log('Agosto')
        break
    case 9:
        console.log('Septiembre')
        break
    case 10:
        console.log('Octubre')
        break
    case 11:
        console.log('Noviembre')
        break
    case 12:
        console.log('Diciembre')
        break
}

/*1️⃣ Nombre si la variable toma su valor
let nro=-1;
if(nro==2){
console.log('mi nombre es jose')
}else{
console.log('mi nombre no es jose')
};

✔ Sintaxis correcta
⚠ Pero no cumple exactamente la consigna

La consigna dice:

imprimir tu nombre SI se cumple
No dice imprimir lo contrario.

🔧 Debería no hacer nada en el else.

2️⃣ Usuario y contraseña
let user = 'jose'
let pass = 12345
if (user == 'jose') {
    if (pass == 12345) {
        console.log('ACCSESO CONSEDIDO')
    }
} else {
        console.log('NO ESTAS REGISTRADO')
}

⚠ Lógica incompleta

Problema:

Usuario correcto + contraseña mala → no muestra nada

Faltan 3 casos:

Usuario incorrecto

Contraseña incorrecta

Correcto

3️⃣ Número positivo, negativo o cero
if(nro >0){
    console.log('el numero es positivo')
}else if (nro == 0) {
    console.log('el numero es cero')
}else{
    console.log('el numero es negativo')
}

✔ PERFECTO

4️⃣ Puede votar
let edad = 12;
if ((18-edad)>0){
    console.log(`eres menor de edad, te faltan ${18-edad} años para poder sufragar`)
} else {
    console.log('Usted puede votar')
}

✔ Correcto
💡 Buena lógica matemática

5️⃣ Operador ternario
let prueba=edad>=18 ? 'Eres mayor' : 'Eres menor' ;
console.log(prueba);

✔ Correcto

6️⃣ Estación del año
let mes=03;
switch (mes){
    case 1:
    case 2:
    case 3:
    case 12:
        console.log('Es verano')
        break;
    default:
        console.log('Es invierno')
        break;
}

⚠ Lógico pero incompleto

Solo existen:

verano

invierno

Faltan:

otoño

primavera

7️⃣ Número de días del mes
switch (mes){
    case 1:
        console.log('Enero')

❌ MAL EJERCICIO

La consigna dice:

mostrar número de días

Tú estás mostrando el nombre del mes.

8️⃣ Saludo por idioma
let idioma ='quechua'

switch (idioma){
    case 'aleman':
        console.log('Guten morguen')
    case 'ingles':
        console.log('good morning')
    case 'italiano':
        console.log('Buongiorno')
    case 'quechua':
        console.log('allin punchay')
}

❌ ERROR GRAVE

Faltan break

Resultado real:
Imprime TODOS los saludos desde el que coincide hacia abajo.

9️⃣ Repetición ejercicio 6

✔ Igual que antes → mismo problema (solo 2 estaciones)

🔟 Repetición ejercicio 7

❌ Igual error → muestra meses, no días

📊 Resumen
Ej	Estado
1	⚠ parcialmente correcto
2	⚠ incompleto
3	✔ perfecto
4	✔ correcto
5	✔ correcto
6	⚠ incompleto
7	❌ incorrecto
8	❌ sin break
9	⚠ incompleto
10	❌ incorrecto */