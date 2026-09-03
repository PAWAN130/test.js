// *********************reduce**************************
const myNums=[1,2,3,5,7]

// const myTotal= myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval

    
// }, 0)

// ******************Now try to write in arrow function************************

const myTotal= myNums.reduce((acc, curr) => acc+curr, 0)
console.log(myTotal);

const shoppingcart=[
    {
        itemName: "js course",
        price: 3099
    },
    {
        itemName: "Py course",
        price: 4999
    },
    {
        itemName: "Data Science course",
        price: 3999
    },
]
const priceToPay = shoppingcart.reduce((acc,item)=>acc + item.price,0)
console.log(priceToPay);
