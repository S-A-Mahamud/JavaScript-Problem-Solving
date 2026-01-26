/**
Checking Array Membership with ‘includes’
Instructions:
Create an array of books containing different book.
Use the includes method to check if the array contains a javascript book.
Print a message to the console indicating whether the element is present in the array or not.
*/

let books = ["python", "javascript", "typescript", "c++", "c"];

if (books.includes("javascript")) {
    console.log("Yes, JavaScript book is in the array");
} else {
    console.log("No, JavaScript book is not in the array");
}
