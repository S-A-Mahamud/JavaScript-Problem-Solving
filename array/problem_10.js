//Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

const ary = [1, 2, 3]
let ary2 = [...ary];
ary2[0]= 99;
console.log(ary2)
