// Have the function FormattedNumber(strArr) take the strArr parameter being passed, which will only contain a single element, and return the string true if it is a valid number that contains only digits with properly placed decimals and commas, otherwise return the string false. For example: if strArr is ["1,093,222.04"] then your program should return the string true, but if the input were ["1,093,22.04"] then your program should return the string false. 
// The input may contain characters other than digits.

function FormattedNumber(strArr) { 

    // code goes here  
    if(strArr[0].split(".").length>2 || strArr[0].match(/[a-zA-Z]/ig) ||
     (!strArr[0].includes(",") && !strArr[0].includes(".") && strArr[0].length>3))
       return false;
    else
    {
    let a1=strArr[0].split(".");
    if(a1[0].length>2)
    {
    let a2=a1[0].split(",");
    for(let i=1;i<a2.length;i++)
    {
        if(a2[i].length!==3)
         return false;
    }
    return true;
    }
     return true;
    }
  
  
  }
     
