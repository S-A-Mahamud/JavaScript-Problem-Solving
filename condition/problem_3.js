/***
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
***/

let grade = 98;

if (grade >= 90 && grade <= 100) {
    console.log('A')
}
else if (grade >= 80 && grade < 90 ) {
    console.log('B')
}
else if (grade >= 70 && grade < 80) {
    console.log('C')
}
else if (grade >= 60 && grade < 70) {
    console.log('D')
}
else if (grade >= 0 && grade < 60) {
    console.log('F')
}
else {
    console.log("Grade must be between 0 and 100")
}