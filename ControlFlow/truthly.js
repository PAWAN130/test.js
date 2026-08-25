// const  userEmail = "pawan@gamil.com"

// if (userEmail){
//     console.log("got the email");

// } else{
//     console.log("dont't have email");
// }
const  userEmail = ""

if (userEmail){
    console.log("got the email");

} else{
    console.log("dont't have email");
}

// []--> if we use this bracket then we get true value



//falsy values
// false, 0, -0, BigInt On, "", null, undefined, NaN

// truthy values

//"0" if the zero is under string then this will be a truthy value
// "0", 'false', " "

//************how to check array**************

if (userEmail.length===0) {
    // console.log("array is empty");
    
}

//********************Agar object empty aa gye to**************************/
const emptyObj = {}

if (Object.keys(emptyObj).length===0) {
    // console.log("object is empty");

}

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10 //This 5 ?? 10 is besically used for when we call the values from database or firebase we cannot get the direct response from there ander there we get two values or undefined for that structure we use this
// val1 = null ?? 10 
// val1 = undefined ?? 13

val1 = null?? 10 ?? 90
console.log(val1);

// terniury Operator

//condition ? true : false

const iceTeaprice =100
iceTeaprice<=80 ? console.log("less the 80"): console.log("more the 80")