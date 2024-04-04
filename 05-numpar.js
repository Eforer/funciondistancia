function encontrarNumeroPar(numero) {
    if (numero % 2 === 0) {
        return true; // El número es par
    } else {
        return false; // El número es impar
    }
}

// Ejemplo de uso
var miNumero = 10;
if (encontrarNumeroPar(miNumero)) {
    console.log(miNumero + " es un número par.");
} else {
    console.log(miNumero + " es un número impar.");
}