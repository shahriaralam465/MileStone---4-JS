/**
 * TERNARY --> three parts
 * 
 * structure
 * 
 * condition ? do something when true : do something when false
 */

const age = 20;
/**Normal if else condition */

// if (age >= 18){
//     console.log("U can give vote")
// }
// else{
//     console.log("No u can't give vote")
// }



/**Simple ternary */
// age >= 18 ? console.log("U can able to give a vote for a party") : console.log("You cant give a single vote")

let price =1250;
const isLeader = true;

// if (isLeader === true){
//     price = 0;
// }
// else{ 
//     price = price + 100;
// }

// console.log(price):

// price = isLeader === true ? 0 : price +100;


/**
 * if price will above 1000 then leader will get 50% discount
 * else nothing
 */


if(isLeader === true){
    if(price > 1000){
        price = price/2;
    }
    else{
        price = 0;
    }
}
else{
    price = price +100 ;
}

console.log(price);




// Ternary

// price = isLeader === true ? price > 1000 ? price /2 : 0 : price + 100;