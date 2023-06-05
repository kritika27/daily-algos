// Write a function that when given a number >= 0, 
//returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
let n=2;
let out=[];
  if(n===0)
    console.log([]);
  else if(n>0){
    let res=[];
    for(let i=1;i<=n;i++)
      {
        res=[];
        for(let j=1;j<=i;j++)
          {
            res.push(1);
          }
        out.push(res);
        
      }
    
    console.log(out);
  }