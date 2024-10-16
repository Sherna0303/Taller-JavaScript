function esBisiesto(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

function celsiusAFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}

function mayorDeDos(n1, n2){
    return n1 > n2 ? n1 : n2;
}

function convertirMinutos(minutos){
    return Math.round(minutos / 60) + " horas y " + minutos%60 +" minutos"
}

function llamadaestaEnRango(numero, inicio, fin){
    return numero >= inicio && numero <= fin;
}

function calcularPrecioFinal(precioinicial, descuento){
    return precioinicial - (precioinicial/100 * descuento);
}

module.exports = { esBisiesto, celsiusAFahrenheit, mayorDeDos, convertirMinutos, llamadaestaEnRango, calcularPrecioFinal };
