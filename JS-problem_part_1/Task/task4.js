function findLongestWord (str){
    let words = str.split(' ');
    let longestWord = '';

    for(const word of words){
        // console.log(word);
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}

const inputString = "I am Learning Programming to become a Programmer";
const largestWord = findLongestWord(inputString);
console.log(largestWord);
