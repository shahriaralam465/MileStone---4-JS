/**
 * 
 */
const numbers = [1, 2, 3, 4, 5, 6, 7];


// console.log(numbers);
// numbers.reverse();
// console.log(numbers);


// const friends = ['elon', 'bill', 'mark', 'waren'];
// console.log(friends);
// friends.reverse();
// console.log(friends);



const rev_numbers = [];
for (const num of numbers) {
    // console.log(num);
    rev_numbers.unshift(num);
}
console.log(rev_numbers);



const reversed_numbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    const num = numbers[i];
    
}