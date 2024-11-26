/**
 * step 1: Declare the function 
 * step 2: condition add
 * step 3: if number is even divided by 2
 * step 4: if number is odd multiply by 2
 * step 5: return those statement
 * step 6: console.log(result);
 * 
 */


/**
 * Task
 * Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function EvenOrOdd(number) {
    // console.log(number);
    if (number % 2 === 0) {
        const divide = number / 2;
        // console.log('divided by 2',divide);
        return divide;
    }
    else{
        const mult = number * 2;
        // console.log('multiply by 2',mult);
        return mult;
    }
}
const result = EvenOrOdd(243);
console.log(result);