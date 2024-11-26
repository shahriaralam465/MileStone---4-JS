/**Generate a random number between 10 to 20.*/

const randomNumber = 10 + Math.floor(Math.random() * 11);
console.log(randomNumber);


/**
 * How it works:
 * Math.random() * 11 Generates a random number between 0 to 10 (Exclusive of 11).
 * 10 + ..... : shifts the range to starts form 10;
 * Math.floor(): Rounds the number Down to the nearest whole Number.
 */