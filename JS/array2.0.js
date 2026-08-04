const marval_heros =["Thar", "Ironman", "spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marval_heros.push(dc_heros)

// console.log(marval_heros);
// console.log(marval_heros[3][1]);

// const allHeros = marval_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marval_heros, ...dc_heros]
// console.log(all_new_heros);
const array1=[2, 4,10, [12, 9],8 [11,[17,18]]]
console.log(array1);



Array.isArray("Pawan");

console.log(Array.isArray("Pawan"))
console.log(Array.from("Pawan"))
console.log(Array.from({name: "Pawan"})) //interesting


let score1=100
let score2=300
let score3=400

console.log(Array.of(score1, score2, score3));