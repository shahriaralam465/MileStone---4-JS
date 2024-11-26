/**
 * Looping technique
 * 1. for loop
 * 2. while loop
 * 3. do while --> ignore
 * 4. for of --> Array loop
 * 5. fo in --> object loop 
 * 
 */

const friends = ['elon', 'bill', 'mark', 'waren'];
for (const friend of friends) {
    // console.log(friend);
}

for (let i = 0; i < 10; i++){
    // console.log(i);
    // console.log(friends[i]);
}



const numbers = [12, 23, 23, 434, 45, 656, 56, 76, 65, 8];
for(let i = 0; i< numbers.length; i++){
    // console.log(numbers[i]);
}

let i = 0;
while (i< friends.length){
    // console.log(friends[i]);
    i++;
}