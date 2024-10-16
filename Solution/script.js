function esBisiesto(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

function celsiusAFahrenheit(celsius){
    return (celsius * 9/5) + 32
}

module.exports = { esBisiesto, celsiusAFahrenheit };
