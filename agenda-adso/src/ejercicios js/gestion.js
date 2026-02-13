// Gestión de aprendices

// Creamos un arreglo de muestra el nombre la ficha y la nota de los aprendices.
const aprendices = [
  { id: 1, nombre: "Ana", ficha: 3223874, nota: 4.2 },
  { id: 2, nombre: "Luis", ficha: 3223874, nota: 3.5 },
  { id: 3, nombre: "María", ficha: 3223875, nota: 4.8 },
];

// 1. obtenerAprobados

// Función que devuelve un nuevo arreglo con los aprendices si la nota sea mayor o igual a 3.0
// Se usa filter para evaluar cada elemento del arreglo
const obtenerAprobados = (aprendices) => {
  return aprendices.filter((aprendiz) => aprendiz.nota >= 3.0);
};

// Se recorre el arreglo de aprobados usando forEach y para despues imprimir cada uno en consola
obtenerAprobados(aprendices).forEach((a) =>
  console.log(`Aprobado: ${a.nombre} - Nota: ${a.nota}`)
);


// 2. calcularPromedio

// Función que calcula el promedio general del grupo
// Primero se suman todas las notas usando reduce
// sum es el acumulador que inicia en 0
const calcularPromedio = (aprendices) => {
  const totalNotas = aprendices.reduce(
    (sum, a) => sum + a.nota,
    0
  );

  // Se divide el total entre la cantidad de aprendices
  return totalNotas / aprendices.length;
};

// Se muestra el promedio con 2 decimales usando toFixed(2)
console.log(
  `Promedio del grupo: ${calcularPromedio(aprendices).toFixed(2)}`
);


// 3. buscarPorNombre

// Función que busca un aprendiz por nombre
// usamos el find para devolver el primer elemento que cumpla la condición
// lo que hace el toLowerCase es que permite hacer la comparación sin importar mayúsculas o minúsculas
const buscarPorNombre = (aprendices, nombre) => {
  return aprendices.find(
    (a) => a.nombre.toLowerCase() === nombre.toLowerCase()
  );
};

// Se muestra el resultado de la búsqueda
console.log(buscarPorNombre(aprendices, "ana"));


// 4. obtenerNombres

// Función que devuelve una lista con los nombres de los aprendices
// Usamos map para recorrer el arreglo y sacar solo el nombre de cada persona.
const obtenerNombres = (aprendices) => {
  return aprendices.map((a) => a.nombre);
};

// join(',') convierte el arreglo en una cadena de texto separando los nombres por coma y espacio.
console.log(
  `Nombres de aprendices: ${obtenerNombres(aprendices).join(", ")}`
);




