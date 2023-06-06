// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

//Solution:

let n=1234;

let arr=n.toString(2).split("");
let sum=0;
for(let i=0;i<arr.length;i++)
  {
    if(arr[i]==="1")
      sum=sum+1;
  }
console.log(sum);//5
