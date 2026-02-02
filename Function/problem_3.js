//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(array) {
    const size = array.length;
    let sum = 0;
    for (ary of array) {
        sum += ary;
    }
    let avg = sum / size;
    return avg.toFixed(2);
}
let ary = [12, 25, 35, 40, 145, 200];
const result = make_avg(ary);

console.log('Avg of Array:', result);