// const coding= ["js", "ruby", "java", "cpp" ]


// const values= coding.forEach((item)=>{
//     console.log(item);
//     return item
    
// })
// console.log(values);


const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num)=> num> 4)
// const newNums = myNums.filter((num)=>{
//     return num > 4
// })

// const newNums=[]
// myNums.forEach((num) =>{
//     if (num>4) {
//         newNums.push(num)
        
//     }
// })

// console.log(newNums);


const Book = [
{title: 'Book One', genere: 'History', publish: 1914, edition: 1920},
{title: 'Book Two', genere: 'science', publish: 1980, edition: 1999},
{title: 'Book Three', genere: 'Fiction', publish: 1999, edition: 2004},
{title: 'Book Four', genere: 'History', publish: 1914, edition: 1920},
{title: 'Book Five', genere: 'Non-Fiction', publish: 2004, edition: 2012},
{title: 'Book Six', genere: 'science', publish: 2010, edition: 2016},
];

// const userBook= Book.filter((bk) => bk.genere=== 'History')
let userBook=Book.filter((bk) => bk.genere==='science')
userBook= Book.filter((bk)=>{return bk.publish>= 1914})
console.log(userBook);


