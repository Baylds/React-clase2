
#  README – Ejercicios de JavaScript (Fundamentos y Funciones)

##  Objetivo del Proyecto

Este proyecto tiene como objetivo aplicar y reforzar los conceptos fundamentales de **JavaScript**, incluyendo:

* Uso de variables constantes (`const`)
* Operadores aritméticos
* Condicionales
* Métodos de arreglos (`filter`, `map`, `reduce`, `find`, `sort`)
* Funciones flecha
* Desestructuración de objetos
* Spread operator (`...`)
* Manipulación de objetos y arreglos

A través de diferentes ejercicios prácticos se desarrollan soluciones que simulan escenarios reales como cálculo de notas, gestión de productos, contactos y aprendices.

---

#  Ejercicios Desarrollados

---

##  Ejercicio 1 – Cálculo de Promedio de un Aprendiz

###  Descripción

Se declaran variables constantes con el nombre del aprendiz, número de ficha y tres notas.
Se calcula el promedio y se determina si el aprendiz está aprobado o no (nota mínima 3.0).

###  Conceptos Aplicados

* Variables constantes (`const`)
* Operadores aritméticos
* Método `toFixed(2)`
* Operador ternario
* Template strings

###  Resultado

Se muestra en consola:

* Nombre
* Ficha
* Promedio con 2 decimales
* Estado: **APROBADO** o **NO APROBADO**

---

##  Ejercicio 2 – Gestión de Aprendices con Arreglos

###  Descripción

Se crea un arreglo de objetos llamado `aprendices`, cada uno con nombre y nota.

###  Funcionalidades Implementadas

1. **Filtrar aprobados**

   * Se usa `filter()` para obtener aprendices con nota ≥ 3.0.

2. **Calcular promedio general**

   * Se usa `reduce()` para sumar todas las notas.
   * Se divide por la cantidad de aprendices.

3. **Generar lista de nombres**

   * Se usa `map()` para obtener solo los nombres.
   * Se usa `join()` para convertirlos en texto.

###  Métodos Practicados

* `filter()`
* `reduce()`
* `map()`
* `join()`

---

##  Ejercicio 3 – Creación de Contactos

###  Descripción

Se crea una función flecha llamada `crearContacto` que genera un objeto contacto con:

* ID único usando `Date.now()`
* Nombre
* Teléfono
* Fecha de creación con `new Date().toLocaleDateString()`

###  Conceptos Aplicados

* Funciones flecha
* Objetos
* Generación de ID
* Fecha actual
* Desestructuración de objetos
* Renombramiento de propiedades

---

##  Ejercicio 4 – Gestión de Productos

###  Descripción

Se crea un arreglo de productos con nombre, precio y stock.

###  Funciones Implementadas

1. **obtenerDisponibles**

   * Devuelve productos con stock mayor a 0 usando `filter()`.

2. **calcularInventario**

   * Calcula el valor total del inventario usando `reduce()`.

3. **aplicarDescuento**

   * Aplica un porcentaje de descuento usando `map()` y el spread operator.

4. **ordenarPorPrecio**

   * Ordena los productos de menor a mayor usando `sort()`.

###  Conceptos Clave

* Spread operator (`...`)
* `filter()`
* `reduce()`
* `map()`
* `sort()`
* Copia de arreglos para evitar modificar el original

---

##  Ejercicio 5 – Gestión Completa de Aprendices

###  Descripción

Se crea un sistema más completo para administrar aprendices con:

* id
* nombre
* ficha
* nota

###  Funcionalidades

1. **obtenerAprobados**

   * Filtra aprendices con nota ≥ 3.0.

2. **calcularPromedio**

   * Calcula el promedio general del grupo.

3. **buscarPorNombre**

   * Busca un aprendiz sin importar mayúsculas o minúsculas usando:

     * `find()`
     * `toLowerCase()`

4. **obtenerNombres**

   * Devuelve un arreglo con todos los nombres usando `map()`.

---

#  Aprendizajes Obtenidos

Durante el desarrollo de estos ejercicios aprendí y reforcé:

* Cómo trabajar correctamente con **arreglos de objetos**
* Cómo usar métodos funcionales modernos de JavaScript
* La importancia de no modificar directamente los arreglos originales
* Cómo estructurar funciones reutilizables
* Cómo usar la desestructuración para hacer el código más limpio
* Cómo generar datos dinámicos como fechas e identificadores únicos

También comprendí mejor cómo escribir código más organizado y legible mediante comentarios explicativos.

---

#  Reflexión Personal

Este conjunto de ejercicios me ayudó a entender cómo JavaScript permite manipular datos de manera eficiente usando métodos como `filter`, `map` y `reduce`.

Me di cuenta de que:

* Es importante escribir código claro y bien comentado.
* Las funciones permiten reutilizar lógica y hacer el código más modular.
* Los métodos de arreglos hacen que el código sea más limpio y profesional.
* Pequeños detalles como `toFixed(2)` o `toLowerCase()` mejoran mucho la funcionalidad.

Este proyecto fortaleció mi lógica de programación y me dio mayor seguridad trabajando con objetos y arreglos en JavaScript.

---

#  Conclusión

Este proyecto integra múltiples conceptos fundamentales de JavaScript aplicados en situaciones prácticas.
Es una base sólida para continuar avanzando hacia temas más complejos como:

* Programación orientada a objetos
* Manejo del DOM
* Promesas y asincronía
* Consumo de APIs

---
