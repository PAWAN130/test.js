const coding= ["js", "ruby", "java", "py",]

// coding.forEach( function (item) {
//     console.log(item);
    
// })

// coding.forEach( (item)=> {
//     console.log(item);

// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach(  (item, index, arr)=>{
//     console.log(item, index, arr);
    
// })

const myCoding=[
    {
        languagerName: "javaScript",
        languageFileName: "js"
    },
    {
        languagerName: "java",
        languageFileName: "java"
    },
    {
        languagerName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach(  (item)=>{

    console.log(item.languagerName);
    
})
