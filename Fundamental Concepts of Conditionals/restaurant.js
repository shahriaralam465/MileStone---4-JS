/**
 * if anyone who is under 12 years old he / she will eat for free
 * if anyone who is over 60 years olf he/she will have 50% discount
 * expect those everyone will pay exact amount for food no discount
 */

const age = 40;
const price = 500;

if (age < 12) {
    console.log("You will get food for free")
}
else if (age >= 50) {
    // 25% discount 
    const discount = price * 25 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}

else if (age >= 60) {
    // 50% discount
    const discount = price * 50 / 100;
    const payAmount = price - discount
    console.log(payAmount)
}

else if (age >= 40) {
    // 10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else {
    console.log("you have to pay for this food")

}