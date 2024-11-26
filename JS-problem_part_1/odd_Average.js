/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */


function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            // console.log(number);
            odds.push(number);
        }
    }
    // odds is the array that contains only the odd numbers
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        // console.log(number);
        sum = sum + number;
    }
    const count = odds.length;
    // console.log(sum);
    const avg = sum / count;
    return avg;
}

const numbers = [13, 34, 5, 56, 87, 32, 56, 85, 5];
const avg = oddAverage(numbers);
console.log("the average of odd numbers is : ", avg);