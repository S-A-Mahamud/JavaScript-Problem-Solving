/**
* You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.

Sample Input:
1000
700

Sample Output:
300
 */

// Solution start here
const taka = 1000;
let oneKgOrranges = 400;
let oneKgApples = 300;
let cost = oneKgOrranges + oneKgApples;
let returnMoney = taka - cost;
console.log(returnMoney);//output: 300
