// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const PromiseOne = new Promise(function(resolve, reject){
    //Do and Async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("async task is complete");
        resolve()
    },1000)
})

PromiseOne.then(function(){
    console.log("promise consumed");
    
}) //.then is direct connection to the resolve

new Promise(function(resolve, reject){
    setTimeout(function(){
    console.log("async task 2");

    },1000)

}).then(function(){
    console.log("Async 2 resolved");
    
})

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Pawan", email: "xyz@abc.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
    
})

const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error){
            resolve({username: "Pawan", password: "123"})
            
        } else{
            reject("ERROR: Something went Wrong")
        }
    },1000)
})

PromiseFour
.then((user)=>{
    console.log(user);
    return user.username
    
})
.then((username)=>{
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
}).finally(() => console.log("The promise is either resolved or rejected"));

const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error){
            resolve({username: "JavaScript", password: "123"})
            
        } else{
            reject("ERROR: JS went Wrong")
        }
    },1000)

});

async function consumePromiseFive(){
    try{
        const response = await PromiseFive
    console.log(response);
    } catch (error){
        console.log(error);
        
    }
    
}
consumePromiseFive()

async function getAllusers(){
    try{
        const response = await fetch ("https://api.github.com/users/PAWAN130")
        
        // const data = response.json()
        // console.log(data);
        
    } catch (error){
        console.log("E:", error);
        
    }
}

getAllUsers()

fetch("https://api.github.com/users/PAWAN130")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error))