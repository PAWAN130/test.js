// Immediately Invoked Function Expressions (IIFE)


// function chai() {
//     console.log(`DATABASE CONNECTED`);
// }
// chai()

//(this first bracket is functon defination)(this is the function/ execution call)

(function chai() {
// this chai is name IIFE

    console.log(`DEVELOPER CONNECTED`);
}) ();

//Globe scope ke pollution se problem hoti hai kayi baar to us Globle scope jo bhi variable hai ya decleration hai uske pollution ko hatne ke liye humne IIFE function ka use kiya hai


((name) => {
    //this is unname IIFE

    console.log(`Welcome AJ ${name}`);

})(`Pawan`)    //this is arrow function call