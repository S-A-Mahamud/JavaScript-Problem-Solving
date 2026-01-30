/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

// let i = 1; 

// while (i <= 100) {
//    let sqr = 1; 

//    while ( sqr * sqr <= i) {
//     if (sqr * sqr === i && i !== 1) {
//         console.log("1st squre nubmer", i);
//         break;
//     }
//     sqr++;
//    }

//    if (sqr * sqr === i && i !== 1) {
//     break;
//    }
//     console.log(i);
//     i++;
// }


let found = false;

for (let i = 1; i <= 100; i++) {
    for (let j = 1; j * j <= i; j++) {
        if (j * j === i && i !== 4) {
            console.log("First square number:", i);
            found = true;
            break;
        }
    }

    if (found) break;

    console.log(i);
}



// let count = 0;

// for (let i = 1; i <= 100; i++) {
//     let sqr = Math.sqrt(i);
//     let int = Number.isInteger(sqr);
    
//     if (int) {
//         console.log(int, i)
//         count++;
//     }

//     if (count === 4) {
//         console.log(count, "Squre number");
//         break;
//     }
// }