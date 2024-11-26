/**
 * Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */

function odd_even(number){
    if(number % 2 === 0){
        return "even";
    }
    else{
        return "Odd";
    }
}
// console.log(odd_even(6));
const number1 = odd_even (4);
const number2 = odd_even (9);
console.log('Given Number is', number1);
console.log('Given Number is', number2);