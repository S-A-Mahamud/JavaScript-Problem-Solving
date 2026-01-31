//Count how many times a string has the letter a

// const string = "Bangladesh is rising with courage, talent, and hope.";
// let count = 0;
// for (let str of string) {    
//     if (str === "a") {
//         count++;
//     }
// }
// console.log(count)

//Count how many times a string has the letter a or A


const string = "A quick brown fox jumps over a lazy dog";
let count = 0;
for (let str of string) {
    if (str.toLowerCase() === "a") {
        count++;
    }
}
console.log(count)