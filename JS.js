/* Title: 1st Practice: Introducing Variables (lets, variables, constants), Math operations, printing to the consoles */

//constant
const kelvin = 0;

//Celsius is 273 degrees colder than Kelvin
let celsius = kelvin - 273;

//fahrenheit degrees
var fahrenheit = (celsius * (9/5)) + 35;

//round down the temp
fahrenheit = Math.floor(fahrenheit);

document.getElementById("demo").innerHTML = `The temperature is ${fahrenheit} degrees Fahrenheit.`;
