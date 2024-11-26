/**
 * Create a function that only will return only the even numbers
 * return the sum of the even numbers
 * 
 */

function evenNumberOnly(numbers) {
    let evens = [];

    // console.log(numbers);
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            evens.push(number);
        }
    }
    return evens;

}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evens = evenNumberOnly(numbers);
// console.log('Even Numbers Are', evens);










function sumOfevenNumbers(nmbrs) {
    let sum = 0 ;
    // console.log(numbers)
    for (const nmbr of nmbrs) {
        // console.log("Loop of numbers",nmbr);
        if (nmbr % 2 === 0) {
            // console.log("Even Numbers", nmbr);
            sum = sum + nmbr;
        }
    }
    return sum;
}
const nmbrs = [12, 23, 34, 45, 56, 67, 78, 89];
const sum = sumOfevenNumbers(nmbrs);

console.log("Sum of the even number is", sum);
