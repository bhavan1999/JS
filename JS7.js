// Way 1
const str1 = 'x,y,z';
console.log(str1.split(';'));
// // Way 2
const str2 = 'HTML';
console.log([...str2]);
// Way 3
const str3 = 'HTML';
console.log(Array.from(str3));
// // Way 4
const str4 = 'HTML';
console.log(Object.assign([], str4));