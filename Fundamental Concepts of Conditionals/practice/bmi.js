let weight = 120;    //KG
let heightInFeet = 5.6;
let heightInMeter = heightInFeet * 0.3048;

const BMI = weight / (heightInMeter * heightInMeter);
//  console.log(BMI);
if (BMI < 18.5) {
    console.log('underweight');
}
else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("You are normal")
}
else if (BMI >= 25 && BMI <= 29.9) {
    console.log("you are overweight")
}
else {
    console.log('You are obese')
}