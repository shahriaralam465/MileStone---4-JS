/**
 * function doubleIt (number){
 * }
 * here "number" is parameter when it will called, the name will be argument
 */
function doubleIt (number){
    const doubled = number * 2;
    console.log('given number is', number);
    console.log('doubled the given number is', doubled);
}

// argument
doubleIt(15);


// another technique 

function difference( num1 , num2){
    const diff = num1 - num2;
    console.log( num1, num2, 'difference is ', diff);
}

difference ( 21, 12);
console.log('------------------------------------');


const fatherAge = 53;
const myAge = 21;

difference (fatherAge, myAge);