//Find Intersection

// Have the function FindIntersection(strArr) read the array of strings stored in strArr which
//will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, 
//the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated 
//string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

function FindIntersection(strArr) { 

    // code goes here  
  let result=[];
  let a1=strArr[0].split(", ");
  let a2=strArr[1].split(", ");
  if(a1.length<=a2.length)
  {
  for(let i=0;i<a1.length;i++)
  {
    if(a2.includes(a1[i]))
    {
    result.push(a1[i]);
    }
  }
  }
  else if(a1.length>a2.length)
  {
    for(let i=0;i<a2.length;i++)
  {
    if(a1.includes(a2[i]))
    {
    result.push(a2[i]);
    }
  }
  }
  
  if(result.length>1)
  return (result.join(","));
  else if(result.length===1)
   return result[0];
  else if(result.length===0)
  return false;
  
  }