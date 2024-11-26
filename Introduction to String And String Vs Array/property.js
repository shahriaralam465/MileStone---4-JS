const person ={
    name :'Shahriar Alam',
    age: 21,
    profession: 'student',
    MonthlyIncome: 1000,
    isMarried: false,
    'fav place': ['khanay khaba', 'Makkah', 'masjidul haram']
}

// console.log(person);

/**--------------------------------------- */
/**
 * Dot Notation
 * dot diye  object er property er value access kora 
 */

// console.log(person.profession);
// const income= person.MonthlyIncome ;
// console.log(income);


/**
 * 
 * Bracket Notation
 * Bracket diya Object er property value Access kora
 *
 * */

// console.log(person['age'])
const boyos = person['age']
console.log(boyos);



console.log(person['fav place'])

