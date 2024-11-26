function evenAverage(numbers){
    const evens = [];
    for (number of numbers){
        // console.log(number);
        if(number % 2 === 0){
            evens.push(number);
        }
    }
    // console.log(evens);
    let sum = 0;

    for(number of evens){
        // console.log(number);
        sum = sum + number;
    }
    // console.log(sum);


    const count = evens.length;
    const avg = sum / count;
    return avg;

    
}

const numbers = [12, 21, 32, 43, 14, 54, 23, 65, 70];
const avg = evenAverage(numbers);
console.log("The even number of provided array is :", avg);