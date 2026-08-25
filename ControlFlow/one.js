//if
// const isUserLoggedIn = true
// const temperature = 4

// if (temperature === 45) {
//     console.log("less then 50");

// } else {
//     console.log("temperature is greater then 50");
// }

// console.log("executed");

//<, >, <=, >=, ==, ===, =!, !==

// const score =200
// if (score>100){
//    let power = "pawan"
//     // const power = "pawan"
//     console.log(`User power:${power}`);
// }
// console.log(`user power: ${power}`)

//shorthand notation

// const balance = 1000
// // if (balance>500) console.log("test")

// if (balance < 500) {
//     console.log("less then 500");

// } else if (balance < 750) {
//     console.log("less then 750");

// } else if (balance < 900) {
//     console.log("less then 750");
// } else {
//     console.log("less then 1250");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedFromEmail = true

if (userLoggedIn && debitCard){
    console.log("allow to buy course");
}
if(loggedInFromGoogle || loggedFromEmail){
    // Here || is used for checking multiple condition also work as OR
    console.log("user logged in");
}