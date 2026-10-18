// let myName = "Pawan      "
// let myChannel = "Ram        "

// console.log(myName.trueLength);

let myHeros = ["Thar", "Superman", "Ironman", "Hammer"]

let heroPower = {
    Thor: "Hammer",
    Superman: "sling",

    getSupermanPower: function(){
        console.log(`spidy power is ${this.Superman}`);

    }
}

Object.prototype.Pawan = function(){
    console.log(`Pawan is present in all object`);
    
}

Array.prototype.hyePawan = function(){
    console.log(`Pawan say hello`);
    
}

// heroPower.Pawan()
// myHeros.Pawan()
// myHeros.hyePawan()
// heroPower.hyePawan()


//inheritance

const User = {
    name: "PAWAN",
    email: "p123@gail.com"

}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

// const TASupport = {
//     makeAssignment: "JS Assignment"
//     // fullTime: true 
//     __proto__:TeachingSupport
// }

Teacher.__proto__ = User

// modern syntex
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "JavaScript with Pawan   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
    
}
anotherUsername.trueLength()

"Pawan".trueLength()
"iceTea".trueLength()