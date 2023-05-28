//Have the function BinaryReversal(str) take the str parameter being passed, 
//which will be a positive integer, take its binary representation (padded to the nearest N * 8 bits), reverse that string of bits, and then finally return the new reversed string in decimal form.

let str="213";
//Number(str).toString(2); to convert to binary
//Steps:
  //convert to binary
  //reverse
  //convert to decimal
 
console.log(parseInt(Number(str).toString(2).split("").reverse().join(""),2));//171
  