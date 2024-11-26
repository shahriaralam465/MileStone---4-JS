/**
 * এখানে কন্ডিশন হচ্ছে আমি যদি ১০ বছর বা তার চেয়ে বেশি হই তাহলে আমি মেলায় ঢুকতে পারবো আর যদি না হই তাহলে ঢুকতে পারবো না 
 *
 */

// const age = 5;

// if (age >= 10){
//     console.log('tumi melay dhukte parba')
// }
// else{
//     console.log('tumi melay dhukte parba na')
// }



/**
 * এখানে কন্ডিশন হচ্ছে আমি যদি ১৫ বছর বা এর চেয়ে বেশি হই তাহলে আমি যেকোনো রাইড এ উঠতে পারবো।
 * 
 * আর আমি যদি ১৩ বছর বা তার চেয়ে বেশি হই তাহলে  কিছু সংখ্যক রাইডে উঠতে পারবো 
 * 
 * এ দুটোর একটাও না হলে আমি কিছুই করতে পারবো না 
 */


var age = 5;

if (age >= 15) {
    console.log("u can ride anything");
}

else if(age >= 13) {
    console.log("u are able to ride of something");
}

else {
    console.log("u are able to go just for baby ride");
}