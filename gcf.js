// Have the function GCF(arr) take the array of numbers stored in arr which will always contain only two positive integers, and return the greatest common factor of them. For example: if arr is [45, 12] then your program should return 3. There will always be two elements in the array and they will be positive integers.

function GCF(arr) { 

    // code goes here  
    let gcf=0;
    for (let i = 1; i <= arr[0] && i <= arr[1]; i++) {
  
      // check if is factor of both integers
      if( arr[0] % i === 0 && arr[1] % i === 0) {
          return i;
      }
  }
  
  
  }
     