//Check whether the string is a palindrome

let str="madam";


for(let i=0;i<str.length/2;i++)
{
    if(str[i]!==str[str.length-1-i])
    return false;
    //   console.log(false);
}
return true;
// console.log(true);