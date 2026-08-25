//Iteraton file****************************

//for
for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    const element =i;
    if(element==5){
        // console.log("5 is best number");
    }
    // console.log(element);
    
}

//nested loop****************************************

for (let i = 0; i <=10; i++) {
    console.log(`Outer loop value:${i}`);
    for (let j=0; j<=10; j++){
        // console.log(`Inner loop value:${j}and inner loop$(i)`);
    }
    
}

//Table assignment***********************************************

for (let i = 1; i <=10; i++) {
console.log(`Outer loop value:${1}`);
for(let j=1; j<=10; j++){
    console.log(i+ '*'+j+'='+ i*j);
}
    
}