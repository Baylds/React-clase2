
// Se crea un arreglo de objetos llamado productos
// en el arreglo esta el nombre el precio y el stock
const productos = [
{ nombre: "Laptop", precio: 1200000,
stock: 5 },
{ nombre: "Mouse", precio: 35000,
stock: 0 },
{ nombre: "Teclado", precio: 85000,
stock: 12 }
];

// 1. obtenerDisponibles
console.log("----Productos disponibles:-----\n")

// Función que recibe un arreglo de productos
// y va a devolver solo aquellos que tengan stock mayor a 0
// Se usa el método filter para filtrar los elementos
const obtenerDisponibles = (productos) => {
  return productos.filter(p => p.stock > 0);
};
//mostramos en consola el resultado
console.log("Productos disponibles:\n", obtenerDisponibles(productos));

// 2. calcularInventario
console.log("----Calcular inventario total:-----\n")

// Función que calcula el valor total del inventario
// Se usa reduce para acumular el valor total
// En cada repeticion se multiplica: precio x stock de cada producto
const calcularInventario = (productos) => {
  return productos.reduce((total, p) => total + (p.precio * p.stock), 0);
};
//se muestra el valor total del inventario
console.log("Valor total del inventario:\n", calcularInventario(productos));

// 3. aplicarDescuento 
console.log("----Aplicar descuento del 10%:-----\n")



// Se usa map para crear un nuevo arreglo modificado
// el ...p es un spread operator que copia todas las propiedades originales
// Luego se sobrescribe la propiedad precio aplicando el descuento
const aplicarDescuento = (productos, porcentaje) => {
  return productos.map(p => ({
    ...p,
    precio: p.precio * (1 - porcentaje / 100)
  }));
};



// mostramos los productos con el descuento.
console.log("Productos con descuento aplicado:\n", aplicarDescuento(productos, 10));

// se crea una funcion para ordenar precio de menor a mayor 
function ordenarPorPrecio(productos) {
  return [...productos].sort((a, b) => a.precio - b.precio); // se usa sort, sirve para ordenar los elementos de un array
}

console.log("ordenados de menor a mayor:", ordenarPorPrecio(productos))