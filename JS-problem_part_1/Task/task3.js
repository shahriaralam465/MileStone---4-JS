function countVowels(str) {
    // console.log(str);
    let count = 0;
    const vowels = "aeiouAEIOU";

    for(let letter of str){
        // console.log(letter);
        if(vowels.includes(letter)){
            count++;
        }
    }
    return count;
}

const inputString = "Programming hero is the best platform to lean web Development"
console.log("Number of vowels:",countVowels(inputString));