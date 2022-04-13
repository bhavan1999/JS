let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// To get Size of String
let length = txt.length;
console.log(length);

// slice(start, end)
// substring(start, end)
// substr(start, length)
// slice() extracts a part of a string and returns the extracted part in a new string.
// substring() is similar to slice().--> The difference is that substring() cannot accept negative indexes.
// substr() is similar to slice(). --> The difference is that the second parameter specifies the length of the extracted part.

let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 10);
let subpart = str.substring(7, 13);
console.log(part);
console.log(subpart);
