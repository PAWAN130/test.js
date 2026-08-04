//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2026,2,4)
// let myCreatedDate = new Date(2026,0, 22, 2, 4)
// let myCreatedDate = new Date("2026-01-4") //using this the formate of yy/mm/dd

let myCreatedDate = new Date("08-14-2026") 
// console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); //usally we use it for pole and for room booking
// console.log(myCreatedDate.getTime()); //values in millisecond
// console.log(Date.now());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000)); // it provides the values in second

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());

// suppose you have to write full time we use
// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday:"long",
    
})