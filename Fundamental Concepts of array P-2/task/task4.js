/**
 * Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
 * 
 * Input: const statement = 'I am a hard working person'
 * 
 * Output:'person working hard a am I'
 */


const statement = 'I am a hard working person';

// Split the sentence into an array of words
const words = statement.split(' ');
// console.log(words);


// Reverse the order of the words in the array
const reversedWords = words.reverse();
// console.log(reversedWords);


// Join the reversed words back into a sentence
const reversedStatement = reversedWords.join(' ');

console.log(reversedStatement);



/**
 * const words = statement.split(" "); ekhane word ke split kore newa hoise 
 *  output hobe :[ 'I', 'am', 'a', 'hard', 'working', 'person' ]
 * 
 * const reverseWords = words.reverse(); ekhnae split kora array gula reverse kora hoise
 *  output hobe :[ 'person', 'working', 'hard', 'a', 'am', 'I' ]
 * 
 * const reversedStatement = reversedWords.join(' ');  ekhane  reverse kora split word gulake abar join method dara join kora hoise ;
 * 
 * output hobe : person working hard a am I
 */