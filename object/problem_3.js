// Count the number of properties.

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const keyStudent = Object.keys(student);
const size = keyStudent.length;
console.log(size);//output: 4
