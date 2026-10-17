const user = {
    username: "Pawan",
    loginCount: 5,
    signdIn: true,

    getUserDetails: function(){
        // console.log("Got user detail in database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
        
        

    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("Pawan", 5, true)
const userTwo = new User("Ritik", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);




// **************construction function*********************

// const promiseOne = new Promise()
// // this new keyword is a construction function. 
// 1.Using new keyword firstly empty object creates which means new object created

//2. construction function call due to call of new keyword it help to pack all the arrugument

//4. get the value in 



// const date = new Date()  





