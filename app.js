//Day 1
//Move the first letter of each word of the sentence to last and add "ay".
//slice,charAt,map,split,join
let str="We love javascript";

let temp=str.split(" ").map(el=>{
    return el.slice(1)+ el.charAt(0)+ "ay"
}).join(" ");

console.log(temp);//eWay ovelay avascriptjay