function countNumber(numbers, input) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === input) {
            count++;
        }
    }
    return count;
}


let numbers = [5, 6, 11, 12, 98, 5];

let input = 5;
let output = countNumber(numbers, input);
console.log("the number", input, "apears", output, "times in the array");