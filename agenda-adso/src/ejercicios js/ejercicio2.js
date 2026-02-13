// Ejercicio 2

//creamos un arreglo llamado aprendices
//cada elemento del arreglo cuenta con dos propiedades con su nombre y con su nota.
const aprendices = [
{ nombre: "Ana", nota: 4.2 },
{ nombre: "Luis", nota: 2.8 },
{ nombre: "María", nota: 4.5 },
{ nombre: "Pedro", nota: 3.5 }
];
// Filtrar aprobados
//// Usamos el metodo filter que recorre el arreglo y devuelve un nuevo arreglo
// con los elementos que cumplan la condición.
//en este caso los aprendices con la nota superior a 3.0
const aprobados = aprendices.filter(a => a.nota >= 3.0);
console.log("Aprobados:", aprobados.length);


// Calcular promedio general
// Usamos el metedo reduce que se usa para acumular valores del arreglo
// sum es el acumulador.
// a representa cada aprendiz.
// Se suman todas las notas comenzando desde 0.

const totalNotas = aprendices.reduce((sum, a) => sum + a.nota, 0);
const promedioGrupo = totalNotas / aprendices.length;
// Como el ejercicio 1 usamos el metodo toFixed(2) para que muestre 2 decimales.
console.log("Promedio grupo:", promedioGrupo.toFixed(2));

// Generar lista de nombres
// El método map crea un nuevo arreglo
// transformando cada elemento
// Aquí solo cojemos la propiedad nombre
const nombres = aprendices.map(a => a.nombre);
// usamos join(', ') que convierte el arreglo en un texto
// separando los nombres con coma y espacio
console.log("Nombres:", nombres.join(", "));
