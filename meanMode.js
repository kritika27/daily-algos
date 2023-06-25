// Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode.


function MeanMode(arr) { 

    // code goes here  
    //Mean
    
    let sum=arr.reduce((acc,el)=>{
   return acc=acc+el;
    },0)
    
    //Mode
    let temp=arr.sort((a,b)=>a>b?1:-1);
  let max=0,count=0;
    for(let i=0;i<temp.length;i++)
    {
      if((temp.lastIndexOf(temp[i])-temp.indexOf(temp[i]))>0 && count===0)
      {
        max=temp[i];
        count=(temp.lastIndexOf(temp[i])-temp.indexOf(temp[i]));
      }
      else if((temp.lastIndexOf(temp[i])-temp.indexOf(temp[i]))>count && count!==0)
         {
           max=temp[i];
           count=(temp.lastIndexOf(temp[i])-temp.indexOf(temp[i]));
         }
    }
  
   return ((sum/arr.length)===max)? 1: 0;
   
  }
     
  // keep this function call here 
  console.log(MeanMode(readline()));