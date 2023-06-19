// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).

 //Input: "hello*3"
// Output: Ifmmp*3
// Input: "fun times!"
// Output: gvO Ujnft!


let str="hello*3";
console.log(str.
    toLowerCase().
    split("").
    map((el)=>el.match(/[a-zA-Z]/ig)?
((String.fromCharCode(el.charCodeAt()+1))):el).
join(""));