const score = 300
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 25.897

console.log(otherNumber.toPrecision(3));

const hundreds = 11000100
console.log(hundreds.toLocaleString('en-IN'));

//*********************Maths*********************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(2,5,9,7));
// console.log(Math.max(1, 4, 64,78, 8, 10, 98));


console.log(Math.random());
console.log((Math.random()*10) - 2);
console.log((Math.random()*10) + 2);
console.log(Math.floor(Math.random()*10) +1);

const min=10
const max=30

console.log(Math.floor(Math.random() *(max -min +1)) +min)




