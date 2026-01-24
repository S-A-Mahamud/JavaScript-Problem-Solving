/**
 * Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
Input: The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04
 */

// Solution starts here
const mathematics = 75.25;
const biology = 65;
const chemistry = 80;
const physics = 35.45;
const bangla = 99.50;

const totalMarks = mathematics + biology + chemistry + physics + bangla;
const avg = totalMarks / 5;

console.log(avg.toFixed(2)); //output: 71.04
