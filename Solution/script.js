function esBisiesto(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

function celsiusAFahrenheit(celsius){
    return (celsius * 9/5) + 32
}

function mayorDeDos(n1, n2){
    return n1 > n2 ? n1 : n2;
}

module.exports = { esBisiesto, celsiusAFahrenheit, mayorDeDos };
