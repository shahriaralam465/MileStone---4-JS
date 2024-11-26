/**Objective: write a function to give me the sum of all numbers in an array 
 * step 1: declare a function 
 * step 2: call check whether the function is called properly 
 * step 3: Set a parameter (s)
 * step 4: pas the parameter (s), check whether parameter is passed in  a proper format 
 * step 5: do the function task (step by step);
 * 
*/

function sumOfNumbers(numbers){
    let sum = 0;
    // console.log(numbers);
    for (const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}

const nums = [32, 43, 54, 65];
const sum = sumOfNumbers(nums);
console.log('sum of numbers is', sum);