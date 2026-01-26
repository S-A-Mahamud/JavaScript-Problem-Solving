/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let fare = 800;
let age = 20;
let isStudent = false;

if (age < 10) {
    console.log("Free for child");
}
else {
    if (isStudent) {
        // 50% discount
        let finalFare = fare - (fare * 50 / 100);
        console.log("Student fare:", finalFare, "tk");
    }
    else {
        if (age >= 60) {
            // 15% discount
            let finalFare = fare - (fare * 15 / 100);
            console.log("Senior citizen fare:", finalFare, "tk");
        }
        else {
            console.log("Regular fare:", fare, "tk");
        }
    }
}
