// Minimum Number
const min = Math.min(12, 23, 543, 54, 65, 34, 5, 2, 534)
console.log("The Minimum number is :", min);

// Maximum Number 
const max = Math.max(12, 23, 543, 54, 65, 34, 5, 2, 534);
console.log("The Maximum Number is", max);

// PI (π)
const PI = Math.PI;
console.log("The Value of PI is :",PI);

// Absolute Distance or Absolute
const diff = Math.abs(5-10);
console.log('the different between 5 to 10 is:', diff);

// round : it will round the fraction number

const frac = Math.round(23.634);
console.log("The round of provided Fraction number is :", frac);


// floor : The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.

const floor = Math.floor(23.825);
console.log("Math.floor OutPut iS :", floor);


// Celi :The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.

const ceil = Math.ceil(0.95);
const ceil2 = Math.ceil(7.20);
console.log("Math.ceil OutPut is :",ceil,ceil2);

// Random:

// console.log(Math.random())
console.log (Math.random()*10);


// generate random round number

const rand = Math.round(Math.random()*10);
console.log("Random number between 1 - 10 is :",rand);
