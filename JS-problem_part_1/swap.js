let a = 5;
let b = 7;

console.log("tha value of 'a' :" , a);
console.log("tha value of 'b' :" , b);

// Swaping

const temp = a;
a = b;
b = temp;

console.log('-------------------------');


console.log("tha value of 'a' :" , a);
console.log("tha value of 'b' :" , b);


for (var i = 0; i < 5; i++) {
    setTimeout(function () {
    console.log(i);
 }, 100);
}