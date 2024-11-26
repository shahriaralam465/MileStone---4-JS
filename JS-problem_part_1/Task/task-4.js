function findLongestWord(str) {
    // Split the string into an array of words
    const words = str.split(' ');
    // Initialize a variable to store the longest word
    let longestWord = '';


    // Iterate through each word
    for(const word of words){
        // If the current word is longer than the current longest word, update it
        if(word.length > longestWord.length){
            longestWord = word ;
        }
    }
    return longestWord;
}

// Example usage:
const inputString = "I am learning to become a Programmer";
const longestWordOfString = findLongestWord(inputString);
console.log(longestWordOfString);

