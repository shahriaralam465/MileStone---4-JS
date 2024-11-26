const institute ={
    name: "RPI",
    section: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'],
    events: ['Daily Assignment Task', 'Project For future Portfolio'],
    unique:{
        field: 'So much bigger field Ever in bangladesh',
        rank:{
            position: 'top noch',
            level: 'Bangladesh 1st'
        }
    }
}

// console.log(institute.section);

institute.unique.rank.field="we have  very big field for play"
console.log(institute.unique.rank.field);

institute.events[1]='Daily CMPUS come';
console.log(institute.events)


// delete

delete institute.section;
console.log(institute);