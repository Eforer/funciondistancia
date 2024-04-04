function sumarFracciones(num1, den1, num2, den2) {
    var sumaNum = (num1 * den2) + (num2 * den1);
    var sumaDen = den1 * den2;
    return `${sumaNum}/${sumaDen}`;
}
var num1 = 1;
var den1 = 3;
var num2 = 1;
var den2 = 3;
var resultado = sumarFracciones(num1, den1, num2, den2);
console.log("La suma de  " + num1 +"/"+ den1 +" + "+ num2 +"/"+ den2 +":");
console.log("La suma de las fracciones es: " + resultado);



console.log("La resta de las fracciones es: "
+ restarFracciones(num1, den1, num2, den2));






function restarFracciones(num1, den1, num2, den2) {
    var restaNum = (num1 * den2) - (num2 * den1);
    var restaDen = den1 * den2;
    return `${restaNum}/${restaDen}`;
}