// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply all 3 numbers together. Note: The argument
// passed must NOT be the same number.
function multiply(a, b, c){
    return a * b * c;
} // Multiply function
let multiResult = 5 * 2 * 3; //multiplying numbers- expected outcome 30
console.log(multiResult); //print result
// TODO: Create a function expression called ‘convertToSeconds’ that takes in a number of minutes as an argument and
// returns the amount in seconds. ***Do not use a console.log() inside of the function***
function convertToSeconds(minutes) {
  return minutes * 60;
}
// amount of minutes & seconds
let minutes = 5;
let seconds = convertToSeconds(minutes);
console.log(seconds); // expected Output: 300
// TODO: Create a function called fahrenheitToCelsius that takes the temperature as an parameter and returns the
// equivalent temperature in Celsius. ***Do not use a console.log() inside of the function***
function fahrenheitToCelsius(Celsius){
    return (Celsius* 9/5)+32;
}
//amount of Celsius & Fahrenheit
let Celsius = 17;
let Fahrenheit = fahrenheitToCelsius(Celsius);
console.log(Fahrenheit)
// TODO: Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log()
// inside of the function ***
const reverseString = str => str.split('').reverse().join('');
// TODO: Create a function that takes in a string and returns the number of Vowels in the sentence. E.g. countVowels(‘Javascript’)
//output =3 ***Do not use a console.log() inside of the function***
const countVowels = str => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return str.toLowercase().split('').filter(char => vowels.includes(char)).length;
}
// TODO: Create a “isPrime” function that takes a number as a parameter and returns true if the number is prime, and false otherwise.
// Make sure to test your code with 4 numbers
const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
