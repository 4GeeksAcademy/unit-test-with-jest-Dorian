// Importar las funciones del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);
    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
  const dollars = fromEuroToDollar(3.5);
  const expected = 3.5 * 1.07;
  expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("convertir de dolar a yenes", function(){
  const dollars = 1;
  const expected = (dollars / oneEuroIs.USD) * oneEuroIs.JPY;
  expect(fromDollarToYen(dollars)).toBe(expected);
});

test("convertir de yenes a libras esterlinas ", function(){
  const yenes = 1;
  const expected = (yenes / oneEuroIs.JPY) * oneEuroIs.GBP;
  expect(fromYenToPound(yenes)).toBe(expected);
});