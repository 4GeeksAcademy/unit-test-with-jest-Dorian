// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(amountInDollars) {
    let amountInEuros = amountInDollars /  oneEuroIs.USD;
    let valueInYen = amountInEuros * oneEuroIs.JPY;
    return valueInYen;
}

const fromYenToPound = function(amountInYenes) {
    let amountInEuros = amountInYenes / oneEuroIs.JPY;
    let valueInGBP = amountInEuros * oneEuroIs.GBP;
    return valueInGBP;
}

module.exports = {sum,fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs};

