// Have the function CamelCase(str) take the str parameter being passed and return it in proper camel case format where the first letter of each word is capitalized (excluding the first letter). The string will only contain letters and some combination of delimiter punctuation characters separating each word.

// For example: if str is "BOB loves-coding" then your program should return the string bobLovesCoding.

// code goes here  

let str="BOB loves-coding";

//Solution:
//   return str.toLowerCase().replace(/[^a-zA-Z]/ig," ").split(" ")
//   .map((el,ind)=>ind!==0?(el.charAt(0).toUpperCase()+el.slice(1)):el).join("");

//for printing the output..
   let temp=str.
   toLowerCase().
   replace(/[^a-zA-Z]/ig," ").
   split(" ").
   map((el,ind)=>ind!==0?(el.charAt(0).toUpperCase()+el.slice(1)):el).
   join("");
   console.log(temp); //bobLovesCoding
