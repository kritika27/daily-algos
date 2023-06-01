//Linear Search
let arr=[8,2,5,10,0,3];
let target=5;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]===target)
      return i;
    //  console.log(i);//return the index
}
return null;