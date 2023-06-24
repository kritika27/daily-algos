// Have the function StringChanges(str) take the str parameter being passed, which will be a string containing letters from the alphabet, and return a new string based on the following rules. Whenever a capital M is encountered, duplicate the previous character (then remove the M), and whenever a capital N is encountered remove the next character from the string (then remove the N). All other characters in the string will be lowercase letters. For example: "abcNdgM" should return "abcgg". The final string will never be empty.



function StringChanges(str) { 

    // code goes here  
    let result="";
    let prev="";
    for(let i=0;i<str.length;i++)
    {
     
      if(str[i]==="M" && i>0)
      {
       result=result+prev;
      }
      else if(str[i]==="M" && i===0)
      {
       // do nothing
      }
      else if(str[i]==="N")
      {
        i=i+1;
      }
      else if(str[i]!=="M" || str[i]!=="N")
      {
        prev=str[i];
        result=result+str[i];
      }
    }
  return result;
  
  }
     
  // keep this function call here 
  console.log(StringChanges(readline()));