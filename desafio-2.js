/**
 * Muestra "¡Hola, mundo!" en la consola.
 */
function mostrarHola() {
  console.log("¡Hola, mundo!");
}

mostrarHola();

/**
 * Muestra un saludo personalizado en un alert.
 * @param {string} nombre - El nombre de la persona a saludar.
 */
function mostrarHolaNombre(nombre) {
  alert(`¡Hola, ${nombre}!`);
}

mostrarHolaNombre("Bienvenido");

/**
 * Calcula el doble de un número.
 * @param {number} numero - El número a duplicar.
 * @returns {number} El doble del número.
 */
function calcularDoble(numero) {
  return numero * 2;
}

let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);

/**
 * Calcula el promedio de tres números.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @param {number} c - Tercer número.
 * @returns {number} El promedio de los tres números.
 */
function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}

let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);

/**
 * Encuentra el número mayor entre dos valores.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} El número mayor.
 */
function encontrarMayor(a, b) {
  return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);

/**
 * Calcula el cuadrado de un número.
 * @param {number} numero - El número a elevar al cuadrado.
 * @returns {number} El cuadrado del número.
 */
function cuadrado(numero) {
  return numero * numero;
}

let resultado = cuadrado(2);
console.log(resultado);