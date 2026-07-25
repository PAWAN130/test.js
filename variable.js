const accountId  = 144553
let acountEmail = "pawan123@gmail.com"
var accountpassword = "12345"
accountCity ="jaunpur"

let accountState;

// accountId = 2 //this is not allowed

accountEmail = "pawan121@gmail.com"
accountpassword = 9080
accountCity = "jaipur"


console.log("accountEmail");


/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId, accountpassword, accountCity, accountState]);
