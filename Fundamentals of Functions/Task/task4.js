function count_zero(binaryString) {
    let count = 0;
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '0') {
            count = count + 1;
        }
    }
    return count;
}

let binaryString = "";
let zeroCount = count_zero(binaryString);
console.log("number of zeros", zeroCount);