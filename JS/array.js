//array

const myArr =[1, 2, 5, 7, 8, 10]
const myHero =["superman", "Spiderman", "Hatim"]

const myArr2 = new Array(1, 2, 5, 8)
// console.log(myArr[1]);

//methods of array

// myArr.push(6)
// myArr.push(15)
// myArr.pop()

// myArr.unshift(9) //unsift used to add the value in the first position and shifts all the values
// myArr.shift() //this shift operation is used to delete the unshift value and priveds the orignal value

// console.log(myArr.includes(17)); //Include commond give the answer in the form of true /false
// console.log(myArr.indexOf(8));

// const newArr =myArr.join()
// console.log(myArr)
// console.log(typeof newArr);

//slice, splice

console.log("A", myArr);

const myn1 =myArr.slice(2, 7)

console.log(myn1);
console.log("B", myArr);

const myn2 =myArr.splice(1, 2)
console.log("C", myArr);
console.log(myn2);



