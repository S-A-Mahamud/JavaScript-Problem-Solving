//Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// const revColors = colors.reverse();
// console.log(revColors);

//loop
// let rev = [];
// for (const color of colors) {
//     // console.log(color);
//     rev.push(color)
// }
// console.log(rev)

let reverse = [];
for (let i = 0; i < colors.length; i++) {
    // reverse.unshift(colors[i])
}
// console.log(reverse);

// decremental loop
let revColor = [];
for (let i = colors.length - 1; i >= 0; i--) {
    revColor.push(colors[i])
}
console.log(revColor)