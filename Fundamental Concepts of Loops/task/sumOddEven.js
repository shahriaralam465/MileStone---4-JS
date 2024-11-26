/**
 * here, 
 * Even is a variable 
 * SumEven is a sum variable which will carry the sum of even numbers
 * 
 */




/**1. */
let startingEvenNumber = 81;
let sumEven = 0;

while (startingEvenNumber <= 131) {
    if (startingEvenNumber % 2 === 0) {
        console.log('Even Number is', startingEvenNumber);
        sumEven = sumEven + startingEvenNumber;
    }
    startingEvenNumber++;
}
console.log('sum:', sumEven);


/**2 */

// let sum = 0;
// for (let num = 81; num <= 131; num = num + 1){
//     if(num % 2 !== 0){
//         sum = sum + num;
//     }
// }

// console.log('sum of all the odd numbers from 81 to 131', sum);


// let startingOddNumber = 206;
// let sumOdd = 0;

// while (startingOddNumber <= 311) {
//     if (startingOddNumber % 2 != 0) {
//         console.log("Odd numbers", startingOddNumber);
//         sumOdd = sumOdd + startingOddNumber;
//     }
//     startingOddNumber++;

// }
// console.log('Sum of the odd numbers', sumOdd);