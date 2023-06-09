// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) returns[false,1,1,2,1,3,"a",0,0]

//Solution:
function moveZeros(arr) {
    let arr1=[];
    let arr2=[];
    for(let i=0;i<arr.length;i++)
      {
        if(arr[i]===0)
          arr2.push(arr[i]);
        else
          arr1.push(arr[i]);
      }
    return [...arr1,...arr2];
  }