// const flipkart = new Object() //this is singleton object
const flipkart = {}

flipkart.id = "123@abc"
flipkart.name = "Pawan"
flipkart.isLoggedIn = false

// console.log(flipkart);

const regularUser = {
    email: "Pawan@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Pawan",
            lastname:"Vishwakarma"

        }
    
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"b", 2:"a"}
const obj2 ={3:"b", 4:"a"}
const obj4 ={9:"c", 5:"d"}

// const obj3 ={obj1, obj2}
// const obj3 =Object.assign({},obj1, obj2, obj4) 


//all the values will be combaine and assign together
//The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const obj3 = {...obj1, ...obj2, ...obj4} //spread operator used.
// console.log(obj3);

//when values comes from database

const users =[
    {
        id: 1,
        emails: "Pawan@gmail.com"

    },
//      {
       
//     },
//      {
        
//     },
]

// users[1].email
// console.log(flipkart);

// console.log(Object.keys(flipkart));
// console.log(Object.values(flipkart));
// console.log(Object.entries(flipkart));

//if you are looping with codes and wants to find the value is existing or not the we use-->

console.log(flipkart.hasOwnProperty('isLoggedIn'));
// console.log(flipkart.hasOwnProperty('isLogged'));


const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "pawan"
}

//course.courseInstructor

const{courseInstructor:Instructor} = course
const{coursename} = course
console.log(Instructor)
// console.log(coursename)


// const navbar = (props.company) =>{
//const navbar = ({company}) =>{}
// } //{company..so on anything}this is way of distructuring

// navbar(company = "Pawan")

// {
//     //Json api

//     "name": "Pawan",
//     "course": "web developement",
//     "price": "free"
// }

//somtimes API's are formed in array formates
[
    {},
    {},
    {}
]

