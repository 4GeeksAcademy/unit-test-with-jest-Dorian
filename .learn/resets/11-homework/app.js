// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)



// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

function fromDollarToYen(amountInDollars) {
    let oneEuroIs = {
        "JPY": 156.5, // yen japonés
        "USD": 1.07, // dólar estadounidense
        "GBP": 0.87, // libra esterlina
    };

let euros = amountInDollars / oneEuroIs.USD;
let yenes = euros * oneEuroIs.JPY;
return yenes;
}

function fromYenToPound(amountInYenes) {
    let oneEuroIs = {
        "JPY": 156.5, // yen japonés
        "USD": 1.07, // dólar estadounidense
        "GBP": 0.87, // libra esterlina
    };

let yenes = amountInYenes / oneEuroIs.JPY;
let GBP = yenes * oneEuroIs.GBP;
return GBP;
}





module.exports = {sum,fromEuroToDollar, fromDollarToYen, fromYenToPound};

