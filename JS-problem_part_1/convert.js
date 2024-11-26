/**
 * Inch To Feet
 * we know 12 inch 1 feet
 * আমরা জানি ১ ফিট সমান ১২ ইঞ্চি
এখন, এমন একটি ফাংশন বানাও যেখানে ইঞ্চি ইনপুট দিলে সেটি ফুট এ আউটপুট দিবে।

লজিকঃ 
আমারা জানি যে মান কে বের করতে হয় তাকে ঐকিক নিয়ম অনুযায়ী ডান পাশে নিতে হবে

১২ ইঞ্চিতে  ১ ফুট 
৫৬ ইঞ্চিতে  ৫৬/১২

 */


// Way 1
function inchToFeet(inch){
    const feet = inch /12;
    return feet;
}

const humanHeight = inchToFeet(75);
// console.log(humanHeight,'.ft');



// way2
function inchtofeet2(inch){
    const feetFraction = inch /12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + " ft " + inchRemaining + " inch.";
    return result;
}
const inputHeight = inchtofeet2(465);
// console.log(inputHeight);



/** Mile To kiloMeter */

function mileToKillometer (mile){
    const kilo = mile * 1.60934;
    return kilo;

}
const inputMile = mileToKillometer(654)
// console.log(inputMile, 'killo');



/** kilometer To Mile */

function kilometerToMile(kilo){
    const mile = kilo / 1.60934;
    return mile;
}
const inputKilo = kilometerToMile(100);
// console.log(inputKilo," Mile ");



/** Pound to kilogram */

function poundToKilo (pound){
    const kilo = pound * 0.453592;
    return kilo;
}
const inputPound = poundToKilo(4);
// console.log(inputPound, " kilo Gram");




/**way 2
 * 
 * Pound to kilogram
 */
function poundToKilo2(pound){
    const kilo = pound * 0.453592;  // pound to kilo main formula
    const justKG = parseInt(kilo);  // it will give only integer 
    const afterDot = pound % 0.453592;  // it will give the number after dot (.)
    const result = justKG + " kg " + afterDot + " pound";
    return result;
}

const inputPound2 = poundToKilo2(8);
// console.log(inputPound2);