/**Count the number of properties*/
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

// console.log(student)
const prop = Object.values(student).length;
console.log(prop);