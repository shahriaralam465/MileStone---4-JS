function sum (x,y){
    const result = x+y;
    return result;
}

// Calling the function
const total = sum(5, 3);
console.log(total);// Output will be 8



function macherTorkari (mach, sobji, mosla){

    // রান্নার নির্দেশাবলী (কনসোল লগ)
    console.log('Prepare the cook oil');
    console.log('Boil the Vegetables');
    console.log('Backed the mosla');
    console.log('put the'+mach);

    // রান্না শেষ (রিটার্ন ভ্যালু)
    return 'Your delicious Fish curry is ready';

}

// ফাংশন কল
const result = macherTorkari('ilish', 'Potato', 'Yellow powder');
console.log(result);