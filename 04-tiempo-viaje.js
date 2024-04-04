function calcularTiempoDeViaje(distancia, velocidadPromedio) {
    return distancia / velocidadPromedio;
}

function calcularTiempoDeViajeTransporte(distancia, transporte) {
    var velocidadPromedio;
    if(transporte == 'auto'){
        velocidadPromedio = 100;
        return distancia / velocidadPromedio;
    }
    else if(transporte == 'bicicleta'){
        velocidadPromedio = 15;
        return distancia / velocidadPromedio;
    } else{
        //caminando
        velocidadPromedio = 2;
        return distancia / velocidadPromedio;
    }
}
// Ejemplo de uso
var distancia = 680; // en kilómetros
var velocidadPromedio = 80; // en kilómetros por hora
var transporte = 'bicicleta'
var tiempoDeViaje = calcularTiempoDeViajeTransporte(distancia, transporte);
console.log("El tiempo de viaje es: " + tiempoDeViaje + " horas");