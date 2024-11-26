/**
 * for-of
 * 
 * ১.শুরুতে একটি  ভ্যারিএবল এর নাম দিতে হবে এবং তারপর আরে ডিক্লেয়ার করতে  হবে
 * 
 * ২. যদি ইচ্ছা হয় সেই ভ্যারিয়েবল টিকে রান করে দেখতে পারি 
 * 
 * ৩. এখন যদি আমরা for loop চালাইতে চাই তাহলে, 
 * 
 *          for (const variable_name of variables_name){
 *                  console.log(varibale_name);
 *          }
 * 
 */



const spots = ['zero_point', 'tetuliya', 'Vinno jogot', 'Shopnopuri', 'kanchon_jonga'];

console.log(spots);

for (const spot of spots){
    console.log(spot);
    console.log('i want to go');
}