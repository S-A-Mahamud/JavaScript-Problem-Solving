// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

const str = 'I am Excited To Explore New Ideas and Experiences Today.';
let newStr = '';
for (let i = 0; i <str.length; i++) {
    let rep = str[i];
    if (rep === 'x') {
        newStr = newStr + 'y';
    }
    else {
        newStr = newStr + rep;
    }
}
console.log(newStr);