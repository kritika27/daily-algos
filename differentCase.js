// Different Cases
// Have the function DifferentCases(str) take the str parameter being passed and return it in upper camel case format where
//the first letter of each word is capitalized. The string will only contain letters and some combination of delimiter 
//punctuation characters separating each word.

// For example: if str is "Daniel LikeS-coding" then your program should return the string DanielLikesCoding.


//Solution

function DifferentCases(str) { 

    // code goes here  
    return str.toLowerCase().replace(/[^a-zA-Z0-9]/ig," ").split(" ").
    map(el=>el.charAt(0).toUpperCase()+el.slice(1)).join("");
    
  }