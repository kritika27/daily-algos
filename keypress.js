// Have the function EquivalentKeypresses(strArr) read the array of strings stored in strArr which will contain 2 strings representing two comma separated lists of keypresses. Your goal is to return the string true if the keypresses produce the same printable string and the string false if they do not. A keypress can be either a printable character or a backspace represented by -B. You can produce a printable string from such a string of keypresses by having backspaces erase one preceding character.


function EquivalentKeypresses(strArr) { 

    // code goes here  
    let result=[],result1=[];
    let a0=strArr[0].split(",");
    for(let i=0;i<a0.length;i++)
    {
      if(a0[i]!=="-B")
      result1.push(a0[i]);
      else
      result1.pop();
    }
    
    
    let a1=strArr[1].split(",");
    for(let j=0;j<a1.length;j++)
    {
      if(a1[j]!=="-B")
      result.push(a1[j]);
      else
      result.pop();
    }
    
    if((result1.join(""))===(result.join("")))
       return true; 
    else
       return false;
  
  }
     
  