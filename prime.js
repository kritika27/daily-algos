// Have the function Primes(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false.
// The range will be between 1 and 2^16.

function Primes(num) { 

    // code goes here  
    for(let i=2;i<num;i++)
    {
      if(num%i===0)
       return "false";
    }
    return "true";
  
  }
     
  // keep this function call here 
  console.log(Primes(readline()));