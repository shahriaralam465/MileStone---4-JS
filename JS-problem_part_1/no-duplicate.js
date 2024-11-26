function noDuplicate(arr){
    const unique = [];
    for (const item of arr){
        if(unique.includes(item)=== false){ 
            unique.push(item);
        }
    }
    return unique;
}

const nestedInput =['jamal', 'josim', 'jabed', 'jahid', 'jabed', 'josim', 'jahid', 'jamal'];

const uniqueArray = noDuplicate(nestedInput);
console.log(uniqueArray);