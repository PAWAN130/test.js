//THIS keyword tell about current context or it refers the current context
const user = {
    username: "Pawan ",
    price: 909,
 WelcomeMessage: function(){
    console.log(`${this.username},Welcome to Website`);
    console.log(this);
 }
}

// user.WelcomeMessage()
// user.username="Pawan"
// user.WelcomeMessage()
// console.log(this)


// function dev(){
//     let username ="Pawan"
//     console.log(this.username);

// }
// dev()


// ************************Arrow function************************
const dev = () => {
    let username ="Pawan"
    console.log(this);
}
// dev()

// ++++++++++++++++++++++Basic Arrow function++++++++++++++++++++++++++++

// ******************Explicit retuen***********************


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//**********************Implicit return************

                //  in implicit return function we do not use {}  we do not use return and it is a single line code

// curly{} ka agar use hoga to return keyword likhna agar (parenthitis) hoga otherwise nhi

// const addTwo = (num1, num2) =>  (num1 + num2)
const addTwo = (num1, num2) => ({username:"Pawan"})

console.log(addTwo(3,9))

// const myArray = [7,9,23,67]
// myAaray.foreach()