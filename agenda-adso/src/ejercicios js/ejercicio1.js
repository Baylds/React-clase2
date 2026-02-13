//se usas variables constantes porque los valores no van a cambiar.
const nombre = "Carolina";
const ficha = 3223874;
const nota1 = 4.0;
const nota2 = 4.5;
const nota3 = 3.8;


//calculo del promedio
//Aca esta sumando las 3 notas y las esta dividiendo entre 3.
const promedio = (nota1 + nota2 + nota3) / 3;

//Aca estamos mostrando en consola la informacion del aprendiz.
console.log(`Aprendiz: ${nombre}`);
console.log(`Ficha: ${ficha}`);
// toFixed(2) limita el promedio a 2 decimales
console.log(`Promedio: ${promedio.toFixed(2)}`);


// Si es aprobado mostrara "APROBADO"
// Si no aprueba mostrara "NO APROBADO"
const aprobado = promedio >= 3.0;
console.log(`Estado: ${aprobado ? 'APROBADO' : 'NO APROBADO'}`);

