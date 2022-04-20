// 1. Concat Method

const v1 = ["Bhavan","Katre"];
const v2 = ["Hello","World"];
const v3 = ["Good","Bye"];
console.log(v1.concat(v2,v3));

// 2. Spread Operator(...)

const v4 = ["Bhavan","Katre"];
const v5 = ["Hello","World"];
const v6 = ["Good","Bye"];
console.log(...v4,...v5,...v6);

// 3. Splice Method

let v7 = ["sun","mon","tue","wed",];
v7.splice(4,0,'thurs');
console.log(v7);

// Push Method

const v8 = ["Bhavan ","Ashok"];
v8.push('Katre');
console.log(v8);

// Map Method

var v9 = [10,20,30,40];
