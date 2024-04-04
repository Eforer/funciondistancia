function reglaDeTres(valor1, cantidad1, cantidad2) {
    return (valor1 * cantidad2) / cantidad1;
}

// Ejemplo de uso
const valor1 = 25;
const cantidad1 = 5;
const cantidad2 = 8;
const resultado = reglaDeTres(valor1, cantidad1, cantidad2);
console.log(`El costo de ${cantidad2} bolígrafos es: $${resultado}`);