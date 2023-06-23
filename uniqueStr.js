// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.


function findUniq(arr) {
    // do magic
    for(let i=0;i<arr.length;i++)
      {
      let flag=[...new Set(arr[0].toLowerCase())]
      .sort((a,b)=>a<b?1:-1)
      .join("");
  
        if(flag!==(
          [...new Set(arr[i].toLowerCase())]
          .sort((a,b)=>a<b?1:-1)
                   .join("")
          ))
       
          return (arr[i]);
      }
  }
  