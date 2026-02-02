//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function  count_zero(str) {
    let count = 0;
    for (let zero of str) {
        if (zero === '0') {
            count ++;
        }
    }
    console.log(count)
}

count_zero('1011000010101') //output: 7