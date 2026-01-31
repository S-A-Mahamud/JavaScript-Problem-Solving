//Check whether a string contains all the vowels a, e, i, o, u
// const string = "Bangladesh is rising with courage, talent, and hope.".toLowerCase();
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// let hasAllVowels = true;

// for (let v of vowels) {
//     if (!string.includes(v)) {
//         hasAllVowels = false;
//         break;
//     }
// }
// console.log(hasAllVowels)


const string = "Bangladesh is rising with courage, talent, and hope.".toLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u'].every(v => string.includes(v))

console.log(vowels)