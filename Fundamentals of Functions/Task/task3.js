/**
 * task
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 *  
 */

function make_avg(arr, size) {
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum = sum + arr[i];
    }
    const average = sum / size;
    return average;
}

const arr = [10, 20, 30, 40, 50];
const size = arr.length;

const avg = make_avg(arr, size);
console.log("Average of the Number is", avg);