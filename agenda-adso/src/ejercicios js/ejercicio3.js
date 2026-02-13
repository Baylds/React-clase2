// Ejercicio 3

// creamos una constante llamada crearContacto y le damos dos parámetros: nombre y telefono.
// usamos la Funcion flecha que crea un nuevo contacto
const crearContacto = (nombre, telefono) => ({

  // Se genera un id único usando la fecha actual con Date.now.
  id: Date.now(),

  // Esta es la propiedad nombre se guarda el valor recibido por el parámetro
  nombre: nombre,

  // Esta es la propiedad telefono se guarda el valor recibido por el parámetro
  telefono: telefono,

  // Fecha de creación del contacto
  // usamos new Date para obtener la fecha actual
  // y el toLocaleDateString la convierte en formato legible
  fechaCreacion: new Date().toLocaleDateString()
});

// Se crea un contacto llamando la función
// y pasando los datos requeridos
const contacto1 = crearContacto("Gustavo", "3001234567");

// Se muestra en consola el objeto.
console.log(contacto1);

// Desestructuración de objetos

// Se sacan las propiedades nombre y telefono del objeto
// y se renombra la propiedad nombre como nombreContacto
const { nombre: nombreContacto, telefono } = contacto1;

// Se muestra la información del contacto.
console.log(`Contacto: ${nombreContacto} - ${telefono}`);
