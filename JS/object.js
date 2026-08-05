//Objects:The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() 

//objects can be decleared in two ways
// 1. literals    2. constructor

//Singleton--> singleton is same type of object which are made by the constructor
Object.create //--> this is constructor method

// object literals--> it is used to decleared the objects
//this {} is known as objects
const mySym = Symbol("key1")

const JsUser = {
    name: "Pawan",
    "full name": "Pawan Vishwakarma",
    [mySym]: "mykey1",
    age: 23,
    location: "jaunpur",
    email: "pawan123@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]

}

console.log(JsUser.lastLoginDays)
console.log(JsUser["lastLoginDays"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

//how to change objects 
JsUser.email = "pawan123@google.com"
// Object.freeze(JsUser)
JsUser.email = "pawan123@google.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Pawan ");

}
JsUser.greetingTwo = function(){
    console.log(`Hello JS, ${this.name} `);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
