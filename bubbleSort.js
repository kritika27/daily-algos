const arr=[8,2,0,1,76,45,3];

for(let i=0;i<arr.length-1;i++)
{
    for(let j=0;j<arr.length-1-i;j++)
    {
        if(arr[j]>arr[j+1])
         [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
    }
}
console.log(arr);//[ 0,  1,  2, 3,8, 45, 76]