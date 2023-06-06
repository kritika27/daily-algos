// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

//Solution:

function highestRank(arr){
    //Your Code logic should written here
      //sort the array
      //find max occuring no.
      let max=0; let k=0;
      const a=arr.sort((a,b)=>a<b?1:-1);
      for(let i=0;i<a.length;i++)
        {
          let j=(a.lastIndexOf(a[i])-a.indexOf(a[i]));
          if(j >max)
            {
            max=j;
           k=i;
              }        
        }
      return a[k];
    }

    //arr [12, 10, 8, 12, 7, 6, 4, 10, 12]  
    //Output 12