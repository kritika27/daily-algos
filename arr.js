// //You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!
// You have to write a method, that return the length of the missing array.
// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
// If the array of arrays is null/nil or empty, the method should return 0.
// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.


const arrayOfArrays=[[1, 2],[8,9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]];
if(arrayOfArrays!==null)
{
let arr=arrayOfArrays.map(el=>el.length)
  let temp=arr.sort((a,b)=>a<b?1:-1);
  for(let i=temp[0];i>=1;i--)
    {
      if(!temp.includes(i) && !temp.includes(0))
       return i;
    else if(!temp.includes(i) && temp.includes(0))
    return 0;

    }
}
return 0;

    // Tests
    const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("FixedTests", function(){
  it("Should pass fixed tests", function(){
    assert.strictEqual(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 3);
    assert.strictEqual(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 2);
    assert.strictEqual(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ), 2);
    assert.strictEqual(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ), 5);
  });    
      
  it("Should pass fixed tests not starting with length 1", function(){    
    assert.strictEqual(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1, 5, 6], [ 1, 1 ], [ 5, 6, 7, 8, 9 ]] ), 4);
  });
  
  it("Should pass edge cases", function(){    
    assert.strictEqual(getLengthOfMissingArray([ ]), 0);
    assert.strictEqual(getLengthOfMissingArray(null), 0);
    
    assert.strictEqual(getLengthOfMissingArray([ [ ], [ 1, 2, 2 ] ] ), 0);
    assert.strictEqual(getLengthOfMissingArray([ [ 1, 2, 2 ], null] ), 0);
    assert.strictEqual(getLengthOfMissingArray([ null, [ 1, 2, 2 ] ] ), 0);
    assert.strictEqual(getLengthOfMissingArray([ [ 1, 2, 2 ], [ ]] ), 0);    
  });
});  
  
describe("Random Tests", function(){
  for(let r=0;r<40;r++) {
    it(`Random test ${r + 1}`, function(){  
      let startLength = Math.floor(Math.random() * 5);
      let endLength = Math.floor(Math.random() * 9) + startLength + 3;
      
      let missingLength = Math.floor(Math.random() * (endLength - startLength - 1)) + startLength + 1;
      
      let arrayOfArrays = [];
      
      for(let i=startLength;i<=endLength;i++)
      {
        if(i != missingLength)
        {
          arrayOfArrays.push(Array.apply(null, Array(i)).map(k => Math.floor(Math.random() * 5)));
        }
      }
        
      if(startLength == 0)
      {
        missingLength = 0;
      }        
      
      arrayOfArrays.sort((a,b) => Math.floor(Math.random() * 3) - 1);
      
      let errorMessage = "Wrong for [" + arrayOfArrays.map(a => "[" + a.join(", ") + "]").join(",\n") + "]";
      
      assert.strictEqual(getLengthOfMissingArray(arrayOfArrays), missingLength, errorMessage);
    });
  }    
});
