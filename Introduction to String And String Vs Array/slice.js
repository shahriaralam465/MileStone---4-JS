const address = 'Rangpur';
const part = address.slice(4, 7);
// console.log(part);


const sentence ='I am a fucking coder, who did code for last 1 year'
// console.log(sentence.split(' '));


/* Spit convert to a array */
const friendStr = 'Rohim, selim, jamal, nasib, rohman, josim';
const friend = friendStr.split(',');
// console.log(friend);

/**Array convert to a string */

const realFriend=[ 'Rohim', ' selim', ' jamal', ' nasib', ' rohman', ' josim' ];
console.log(realFriend.join());
console.log(realFriend.join('_-_'));
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));