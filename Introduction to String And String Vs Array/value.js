const person ={
    name :'Shahriar Alam',
    age: 21,
    profession: 'student',
    MonthlyIncome: 1000,
    isMarried: false,
    'fav place': ['khanay khaba', 'Makkah', 'masjidul haram']
}


person.MonthlyIncome=3000;
console.log(person); 

person['age']= 26;
console.log(person); 

const propName = 'profession';
person[propName]= 'devops';
console.log(person);

