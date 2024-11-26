/**
 * Write a function to convert temperature from Celsius to Fahrenheit.
 */

function celsiusToFahren(celsius){
    const fahren = (celsius * 9/5)+32
    return fahren;
}   

const inputCelcius = celsiusToFahren(40);
console.log('Celsius to fahrenheit ',inputCelcius,"°");