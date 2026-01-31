//Capitalize Every first Letter of each word in a String
//loop 
const str = 'Capitalize every first letter of each word in a String';
const ary = str.split(' ')
let newStr = [];

for (a of ary) {
    let char = a[0]
    let word = char.toUpperCase() + a.slice(1)
    newStr.push(word);
}
console.log(newStr.join(' '))

//map
const str = 'Capitalize every first letter of each word in a String';

const capitalized = str
  .split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ');

console.log(capitalized);
