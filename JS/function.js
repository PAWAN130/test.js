//function--> fuction() means whatever we write in the form of code taking all them in a single package is known as function

function sayMyName(){
    console.log("P")
    console.log("A")
    console.log("w")
    console.log("A")
    console.log("N")
}

sayMyName()

//Adding two number in function

// function addTwoNumbers(number1,number2){  //(number1, number2) are the parameter
//     console.log(number1 + number2);

// }

function addTwoNumbers(number1,number2){  

//    let result= number1 + number2
//    return result
   return number1 + number2

}

// addTwoNumbers(4, "15")
// addTwoNumbers(4, "b") //these are the aregument because we cal the function and pass the value 

const result = addTwoNumbers(5 , 8)

// console.log ("Result:", result);

function loginUserMessage(username){
    if(username=== undefined){
        console.log("please enter a username")
            return
    }
    return `$ {username} just logged in`
}

// console.log(loginUserMessage("Pawan"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(100, 600, 678))


