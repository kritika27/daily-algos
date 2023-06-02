//Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string.
//If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

function LongestWord(sen) { 

    // code goes here  
    let str=sen.split(" ");
    let len=str.map(el=>(el.replace(/[^a-zA-Z]/ig,"")).length);
  
    let max=len.indexOf(Math.max(...len));
  
  return str[max];
   
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));