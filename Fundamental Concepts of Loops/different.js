// odd numbers
/* for (let i = 0; i < 20; i = i + 1) {
    if (i % 2 === 1) {
    }
    console.log('The odd number between 0 to 20', i);
} */



// Another way to get odd number

/* for (let i = 0; i < 20; i++) {
    if (i % 2 !== 0){
        console.log('this is another way to find out odd number', i);
    }
} */

// it will shows odd number by sum 

/* for(let i = 1; i < 20 ; i+=2){
    console.log(i);
} */

// Give me  the list numbers between 1 to 30 divisible by 5

    /**
     *  ekhane for loop er moddhe ekta varibale "i" ke newa hoile and er man dewa hoise 1 
     * 
     * second condition dewa hoilo je jodi i 30 er cheye choto othoba soman hy tahole  next line a jabe
     * 
     * next line a if diya arek ta conditon add korse, I ke jodi 5 dara vag kora hoy tahole koyta ber hobe emn kichu
     * 
     * 
     */

/* for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
 */

// Give me  the list numbers between 1 to 30 divisible by 3

/* for (let i = 1; i <= 30; i++){
    if(i % 3 === 0 || i % 5 === 0){
        console.log(i)
    }
}
 */
// Give me the list of number between 1 to 30 only divided by 3 and 5

/* for(let i =1; i <= 30; i++ ){
    if(i% 3 === 0 && i % 5 ===0){
        console.log(i);
    }
} */


// give me the sum of numbers form 1 to 20 that are divisible by 3
let total= 0;
for (let i = 1; i <= 20 ; i++){
    if(i % 3 === 0){
        console.log(i);
        total = total + i;
        console.log('total', total);
    }
}
console.log('total of the number', total);