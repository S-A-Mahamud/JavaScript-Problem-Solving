/**
 * What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.
 */

// Soltion start here
// Code 1
var a = isNaN('11');

Step by Step: '11' is a string.

isNaN() checks whether a value cannot be converted to a number.

'11' can be converted to the number 11.

Since it can be converted to a number, it is not NaN → isNaN() returns false.

// Output: false



// Code 2
var a = isNaN(2 - 10);

Step by Step: 2 - 10 evaluates to -8.

-8 is a number.

isNaN(-8) checks whether -8 is NaN → it is not NaN, so it returns false.

// Output: false